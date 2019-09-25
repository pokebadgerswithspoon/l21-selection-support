import React from 'react'
import classNames from 'classnames'
import { arrayOf, func, oneOfType, number, string, bool, shape } from 'prop-types'

const propTypes = {
  children: oneOfType([string, number, arrayOf(oneOfType([string, number]))]),
  disabled: bool,
  onClick: func.isRequired,
  outline: bool,
  style: shape({}),
}
const defaultProps = {
  children: '',
  disabled: false,
  outline: true,
  style: null,
}
const Button = ({ onClick, children, disabled, outline, style }) => (
  <button
    type="button"
    onClick={() => !disabled && onClick()}
    className={classNames('btn', 'btn-small', { 'btn-outline': outline })}
    disabled={disabled}
    style={style}
  >
    {children}
  </button>
)

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
