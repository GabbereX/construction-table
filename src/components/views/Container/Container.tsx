import React from 'react'

import { Header } from '../Header'

import styles from './Container.module.scss'

export function Container() {
	return (
		<div className={ styles.container }>
      <Header />
    </div>
	)
}
