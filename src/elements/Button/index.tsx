
import { MouseEventHandler, MouseEvent } from 'react'
import { StyledButton } from './styles'

interface IProps {
    buttonType?: "standard" | "cancel" | undefined
    name: string | null
    disabled?: boolean | undefined
    type?: "button" | "submit" | "reset" | undefined
    size?: "standard" | "small" | "medium" | undefined
    onClick: MouseEventHandler<HTMLButtonElement> | undefined
}

export function Button({
    buttonType = 'standard',
    name = null,
    disabled = false,
    type = 'button',
    size = 'small',
    onClick = () => false,
}: IProps) {

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        onClick(e)
    }

    return (
        <StyledButton
            disabled={disabled}
            size={size}
            type={type}
            buttonType={buttonType}
            onClick={handleClick}
        >
            {name}
        </StyledButton>
    )
}
