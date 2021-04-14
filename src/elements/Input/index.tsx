import { ChangeEventHandler, InputHTMLAttributes } from 'react'
import styled from 'styled-components/macro'
import { above, typography } from '../../utils'





export const TextInput = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  box-sizing: border-box;
  box-shadow: none;
  max-width: 100%;
  border-image: initial;
  border: 1px solid;
  border-color: inherit;
  border-radius: 3px;
  font: inherit;
  margin: 0.5em 0;
  padding: 0.75em;
  transition: border-color 0.2s ease 0s;
  &:hover {
    border: 1px solid var(--star-grey);
  }
  ${above.med`
  width: 50em;
  `}
  ${above.large`
  width: 70em;
  `}
`
export const TextArea = styled.textarea`
  box-sizing: border-box;
  box-shadow: none;
  max-width: 100%;
  border-image: initial;
  border: 1px solid;
  border-color: inherit;
  border-radius: 3px;
  font: inherit;
  margin: 0.5em 0;
  padding: 0.75em;
  transition: border-color 0.2s ease 0s;
  &:hover {
    border: 1px solid var(--star-grey);
  }
`
export const InputLabel = styled.label<{ htmlFor: any }>`
  display: block;
  margin-top: 10px;
  margin-bottom: 0.3em;
  color: var(--grey);
  ${typography('medium')}
  ${typography('letterSpacing')}
  ${typography('bold')}
  ${above.med` 
    ${typography('default')}
  `}
`

interface IProps {
  placeholder?: string
  defaultValue?: string | number | readonly string[] | undefined
  label: string | null
  type?: string,
  domID: string | undefined,
  disabled?: boolean,
  name: string,
  onChange: ChangeEventHandler<HTMLInputElement> | undefined

}

export function Input({
  placeholder = '',
  defaultValue = '',
  label = null,
  type = 'text',
  domID = '',
  disabled = false,
  name = '',
  onChange = () => false
}: IProps) {

  if (label && !domID) {
    console.warn('Please enter a valid "domID" prop into Input component')
  }

  return (
    <div>
      {label ? <InputLabel htmlFor={domID}>{label}</InputLabel> : null}

      <TextInput
        id={domID}
        name={name}
        type={type}
        value={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  )
}

