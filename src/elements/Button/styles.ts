import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components/macro'
import { elevation } from '../../utils'


interface ButtonProps {
    size: 'small' | 'medium' | 'standard' | undefined
    buttonType: 'cancel' | 'standard' | undefined
}

const Button = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>` 
 padding: 5px 15px;
  margin-right: 10px;
  ${elevation[1]};
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  justify-content: center;
  border-radius: 5px;
  font-size: 20px;
  &:hover {
    ${elevation[2]};
  }
  &:focus {
    outline: var(--white) auto 1px;
  }

`

export const StyledButton = styled(Button) <ButtonProps>`
 
  ${({ size }) => {
        switch (size) {
            case 'small': {
                return `font-size: 12px;
        `
            }
            case 'medium': {
                return `font-size: 16px;
                width: 0;
        `
            }
            case 'standard': {
                return `width: 100%;
        `
            }
            default:
                return
        }
    }}

  ${({ buttonType }) => {
        switch (buttonType) {
            case 'cancel': {
                return `background: var(--red);
                border-color: var(--red);
                color: var(--white);
        `
            }
            case 'standard': {
                return `background: var(--grey); 
                border-color: var(--grey);
                color: var(--white);
        `
            }
            default: {
                return `background: var(--teal); 
                border-color: var(--teal);
                color: var(--white);
        `
            }
        }
    }}
`
