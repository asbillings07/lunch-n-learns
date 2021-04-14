import { css } from 'styled-components'


const size = {
  small: '575',
  medSmall: '725',
  med: '960',
  large: '1175'
}

export const above = Object.keys(size).reduce((acc: any, label: sizeR) => {
  acc[label] = (...args: any) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})