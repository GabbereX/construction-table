import React from 'react'

import { GridIcon } from '../../../icons'

import { IMenuItemProps } from './MenuItem.types'

import styles from '../Menu.module.scss'

export function MenuItem({ text }: IMenuItemProps) {
	return (
		<li className={ styles.item }>
			<button>
				<GridIcon />
				<div>
					{ text }
				</div>
			</button>
    </li>
	)
}
