import React from 'react'

import { Header } from '../Header'
import { Menu } from '../Menu'

import styles from './Container.module.scss'

export function Container() {
	return (
		<div className={ styles.container }>
      <Header />
			<div>
				<Menu />
			</div>
    </div>
	)
}
