import React from 'react'
import styled, { css } from 'styled-components'

import { Color } from '../../../consts/enums.consts'

import { IIconButtonProps } from './IconButton.types'

export function IconButton(props: IIconButtonProps) {
	const {
		children,
		disabled,
		classes,
		onClick
	} = props

	return (
		<StyledButton
			className={ classes }
			onClick={ onClick }
			disabled={ disabled }
			{ ...props }
		>
			{ children }
    </StyledButton>
	)
}

const StyledButton = styled.button<IIconButtonProps>`
  ${ ({ sizeButton }) => sizeButton && css`
		width: ${ sizeButton }px;
    height: ${ sizeButton }px;
  ` }
  
	line-height: 0;
	
	& svg {
		${ ({ sizeIcon }) => sizeIcon && css`
			width: ${ sizeIcon }px;
      height: ${ sizeIcon }px;
		` }
		
		fill: ${ ({ fill }) => fill || Color.GRAY_100 };
		
		transition-property: fill, transform;
    transition-duration: var(--transition-duration-normal);
		transition-timing-function: ease;
	}
  
	&:hover:not([disabled]) svg {
		fill: ${ ({ fillHover }) => fillHover || Color.WHITE };
	}

  &:active:not([disabled]) svg {
    transform: scale(0.9, 0.9);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`
