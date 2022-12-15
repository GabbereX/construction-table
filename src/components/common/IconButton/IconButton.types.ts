import { FormEvent, ReactNode, MouseEvent } from 'react'

import { Color } from '../../../consts/enums.consts'

type TEventButton = FormEvent<HTMLButtonElement> | MouseEvent<HTMLButtonElement> | MouseEvent<HTMLSpanElement>

export interface IIconButtonProps {
	children: ReactNode
	fill?: Color
	fillHover?: Color
	sizeIcon?: number
	sizeButton?: number
	disabled?: boolean
	onClick?: (e?: TEventButton) => void
	classes?: string
}
