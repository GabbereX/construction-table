import React from 'react'

import { MenuHeader } from './MenuHeader'
import { MenuItem } from './MenuItem'

import styles from './Menu.module.scss'

export function Menu() {
	const menuList = [
		'По проекту',
		'Объекты',
		'РД',
		'МТО',
		'СМР',
		'График',
		'МиМ',
		'Рабочие',
		'Капвложения',
		'Бюджет',
		'Финансирование',
		'Панорамы',
		'Камеры',
		'Поручения',
		'Контрагенты',
	]

	return (
		<div className={ styles.menu }>
			<MenuHeader />
			<ul
				className={ styles.list }
			>
				{
					menuList.map(item =>
						<MenuItem
							key={ item }
							text={ item }
						/>
					)
				}
			</ul>
		</div>

	)
}
