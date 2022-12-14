import React from 'react'

import { BackArrowIcon, MenuIcon } from '../../icons'
import { IconButton } from '../../common/IconButton'

import styles from './Header.module.scss'

export function Header() {
	const headerIcons = [ <MenuIcon />, <BackArrowIcon /> ]

	return (
		<header className={ styles.header }>
			<div>
				{
					headerIcons.map(icon => (
						<IconButton
							classes={ styles.iconButton }
							sizeButton={ 32 }
						>
							{ icon }
						</IconButton>
					))
				}
			</div>
		</header>
	)
}
