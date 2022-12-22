import axios from 'axios'
import React, { ChangeEvent, FormEvent, Fragment, ReactNode, useState } from 'react'

import { fields, missingKeys } from './ContentTableRow.consts'
import { Color, FieldName, RowMode } from '../../../../../consts/enums.consts'
import { baseURL, eID } from '../../../../../consts/api.consts'

import { IContentTableRowProps, IValuesRow } from './ContentTableRow.types'
import { DeleteRowIcon, LevelNestedRowIcon, LevelOneIcon, LevelTwoIcon } from '../../../../icons'

import styles from '../../Content.module.scss'
import { IconButton } from '../../../../common/IconButton'

export function ContentTableRow( { data, rowMode }: IContentTableRowProps ) {
  const [rowModeState, setRowModeState] =
    useState<RowMode>(rowMode ?? RowMode.VIEW)

  const [ values, setValues ] = useState<IValuesRow>({
    [FieldName.ROW_NAME]: data?.[FieldName.ROW_NAME] ?? null,
    [FieldName.SALARY]: data?.[FieldName.SALARY] ?? null,
    [FieldName.EQUIPMENTCOSTS]: data?.[FieldName.EQUIPMENTCOSTS] ?? null,
    [FieldName.OVERHEADS]: data?.[FieldName.OVERHEADS] ?? null,
    [FieldName.ESTIMATED_PROFIT]: data?.[FieldName.ESTIMATED_PROFIT] ?? null
  })

  const isRowModeEdit = rowModeState === RowMode.EDIT

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const submitValues = {
      ...values,
      ...missingKeys
    }
    for (let key in submitValues) {
      if (submitValues[key] === null) {
        key === FieldName.ROW_NAME
          ? submitValues[key] = ''
          : submitValues[key] = 0
      }
    }

    const url = `${ baseURL }/v1/outlay-rows/entity/${ eID }/row/create`

    const body = {
      ...submitValues,
      ...missingKeys
    }

    axios.post(url, body)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const isRowName = e.target.name === FieldName.ROW_NAME

    setValues(prev => ({
      ...prev,
      [e.target.name]: isRowName
        ? e.target.value
        : +e.target.value
    }))
  }

  const handleDoubleClick = (): void =>
    setRowModeState(RowMode.EDIT)

  const renderLevelRow = (): ReactNode =>
    <th className={ styles.level_icon }>
      <div >
        <IconButton fill={ Color.BLUE } disabled={ isRowModeEdit }>
          <LevelOneIcon />
        </IconButton>
        <IconButton fill={ Color.GREEN } disabled={ isRowModeEdit }>
          <LevelTwoIcon />
        </IconButton>
        <IconButton fill={ Color.SLATE } disabled={ isRowModeEdit }>
          <LevelNestedRowIcon />
        </IconButton>
        <IconButton fill={ Color.RED }>
          <DeleteRowIcon />
        </IconButton>
      </div>
    </th>


  const renderEditMode = (): ReactNode =>
    <Fragment>
      {
        fields.map(field => {
          const isRowName = field === FieldName.ROW_NAME

          return (
            <th key={ field }>
              {
                isRowName &&
                <form
                  id='editedForm'
                  onSubmit={ handleSubmit }
                >
                  <button type='submit' hidden />
                </form>
              }

              <div>
                <input
                  type={ isRowName ? 'text' : 'number' }
                  name={ field }
                  form='editedForm'
                  placeholder={ isRowName ? 'Название' : '0'}
                  value={ values[field] ?? '' }
                  onChange={ handleChange }

                />
              </div>
            </th>
          )
        })
      }
    </Fragment>

  const renderViewMode = (): ReactNode =>
    <Fragment>
      {
        fields.map(cell =>
          <th key={ cell }>
            <div>
              { values[cell] }
            </div>
          </th>
        )
      }
    </Fragment>

	return (
    <tr onDoubleClick={ handleDoubleClick }>
      { renderLevelRow() }
      {
        rowModeState === RowMode.VIEW
          ? renderViewMode()
          : renderEditMode()
      }
    </tr>
	)
}
