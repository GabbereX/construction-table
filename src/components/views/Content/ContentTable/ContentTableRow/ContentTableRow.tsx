import React, { ChangeEvent, FormEvent, ReactNode, useState } from 'react'
import { IValuesRow } from './ContentTableRow.types'
import { fields, missingKeys } from './ContentTableRow.consts'
import { FieldName } from '../../../../../consts/enums.consts'
import { baseURL, eID } from '../../../../../consts/api.consts'
import axios from 'axios'

export function ContentTableRow() {
  const [ values, setValues ] = useState<IValuesRow>({
    [FieldName.ROW_NAME]: null,
    [FieldName.SALARY]: null,
    [FieldName.EQUIPMENTCOSTS]: null,
    [FieldName.OVERHEADS]: null,
    [FieldName.ESTIMATED_PROFIT]: null
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const submitValues = {
      ...values
    }

    for (let key in submitValues) {
      if (submitValues[key] === null) {
        key === FieldName.ROW_NAME
          ? submitValues[key] = ''
          : submitValues[key] = 0
      }
    }

    const body = {
      ...submitValues,
      ...missingKeys
    }

    axios.post(
      `${ baseURL }/v1/outlay-rows/entity/${ eID }/row/create`,
      body
    )

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

  const renderEditMode = (): ReactNode => {
    return (
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
    )
  }

	return (
    <tr>
      <th>
        <div>
          i
        </div>
      </th>
      { renderEditMode() }
    </tr>
	)
}
