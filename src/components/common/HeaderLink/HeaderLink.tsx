import cn from 'classnames'
import React, { MouseEvent } from 'react'

import { IHeaderLinkProps } from './HeaderLink.types'

import styles from './HeaderLink.module.scss'

export function HeaderLink({
	linkText,
	setActiveLink,
	active
}: IHeaderLinkProps) {
	const handleClick = (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>): void => {
	  e.preventDefault()
		setActiveLink(linkText)
	}

	return (
		<a
			onClick={ handleClick }
			className={ cn(styles.link, active && styles.active) }
			href='#'
		>
			{ linkText }
		</a>
	)
}
