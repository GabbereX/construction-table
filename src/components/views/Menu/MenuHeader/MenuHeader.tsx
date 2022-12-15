import React from 'react'

import { ArrowIcon } from '../../../icons'

import styles from '../Menu.module.scss'

export function MenuHeader() {
	return (
		<div
			className={ styles.header }
		>
			<div>Название проекта</div>
			<div
				className={ styles.header_abbr }
			>
				Аббревиатура
			</div>
			<button
				className={ styles.header_arrow }
			>
				<ArrowIcon />
			</button>
		</div>
	)
}
