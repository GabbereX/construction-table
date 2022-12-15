import React from 'react'

import { ContentHeader } from './ContentHeader'
import { ContentTable } from './ContentTable'

import styles from './Content.module.scss'

export function Content() {
	return (
		<div className={ styles.wrapper }>
      <ContentHeader />
			<ContentTable />
    </div>
	)
}
