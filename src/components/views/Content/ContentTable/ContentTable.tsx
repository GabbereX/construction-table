import React from 'react'

import { tableHeadText } from './ContentTable.consts'

import styles from '../Content.module.scss'

export function ContentTable() {
	return (
		<div className={ styles.table_wrapper }>
      <table className={ styles.table }>
	      <thead className={ styles.table_head }>
	        <tr>
		        {
			        tableHeadText.map(text =>
				        <th key={ text }>
					        { text }
								</th>
			        )
		        }
	        </tr>
	      </thead>
	      <tbody>

	      </tbody>
      </table>
    </div>
	)
}
