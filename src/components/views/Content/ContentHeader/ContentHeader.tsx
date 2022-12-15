import React from 'react'

import styles from '../Content.module.scss'

export function ContentHeader() {
	return (
    <div className={ styles.header }>
      <div className={ styles.header_text }>
        Строительно-монтажные работы
      </div>
    </div>
	)
}
