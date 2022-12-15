import React, { useState } from 'react'

import { BackArrowIcon, MenuIcon } from '../../icons'
import { IconButton } from '../../common/IconButton'
import { HeaderLink } from '../../common/HeaderLink'

import styles from './Header.module.scss'

export function Header() {
	const headerIcons = [ <MenuIcon />, <BackArrowIcon /> ]
	const headerLinks = [ 'Просмотр', 'Управление' ]

	const [ activeLink, setActiveLink ] = useState<string>(headerLinks[0])



	return (
		<header className={ styles.header }>
			{
				headerIcons.map((icon, index) =>
					<IconButton
						key={ index }
						classes={ styles.iconButton }
						sizeButton={ 32 }
					>
						{ icon }
					</IconButton>
				)
			}
			{
				headerLinks.map(text =>
					<HeaderLink
						key={ text }
						linkText={ text }
						setActiveLink={ setActiveLink }
						active={ activeLink === text }
					/>
				)
			}
		</header>
	)
}
