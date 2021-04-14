import { css } from 'styled-components'

export const typography = (style) =>
({
  uppercase: css`
      text-transform: uppercase;
    `,
  small: css`
      font-size: 11px;
    `,
  medium: css`
      font-size: 12px;
    `,
  default: css`
      font-size: 14px;
    `,
  large: css`
      font-size: 15px;
    `,
  defaultLineHeight: css`
      line-height: 1.4em;
    `,
  bold: css`
      font-weight: 600;
    `,
  letterSpacing: css`
      letter-spacing: 0.05em;
    `
}[style])