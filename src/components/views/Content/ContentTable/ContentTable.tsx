import React, { ReactNode, useEffect } from 'react'

import { tableHeadText } from './ContentTable.consts'

import { useAppSelector } from '../../../../hooks/redux/useAppSelector'
import { theeRowsState } from '../../../../store/treeRows/treeRows'
import { useAppDispatch } from '../../../../hooks/redux/useAppDispatch'

import { Spinner } from '../../../common/Spinner'

import styles from '../Content.module.scss'
import { ContentTableRow } from './ContentTableRow'
import { RowMode } from '../../../../consts/enums.consts'

export function ContentTable() {
	const { isLoading, data, error } = useAppSelector(theeRowsState)
	const { getTheeRows } = useAppDispatch()

	useEffect(() => {
		getTheeRows()
	}, [])

	const renderTable = (): ReactNode =>
		<table className={ styles.table }>
			<thead className={ styles.table_head }>
				<tr>
					{
						tableHeadText.map(text =>
							<th key={ text }> { text } </th>)
					}
				</tr>
			</thead>

			<tbody className={ styles.table_body }>
			{
				data.length
					? data.map(rowData =>
							<ContentTableRow
								key={ rowData.id }
								data={ rowData }
							/>
						)
					: <ContentTableRow rowMode={ RowMode.EDIT } />
			}

			</tbody>
		</table>

	const renderError = () =>
		<div className={ styles.error }>
				<span>
					Ошибка! Не удалось загрузить список.
				</span>
			<button
				onClick={ getTheeRows }
			>
				Попробовать загрузить снова
			</button>
		</div>

	const renderContent = (): ReactNode => {
	  if (isLoading) return <Spinner />

		if (error) return renderError()

		return renderTable()
	}

	return (
		<div className={ styles.table_wrapper }>
			{ renderContent() }
    </div>
	)
}
