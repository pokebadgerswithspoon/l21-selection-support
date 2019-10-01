import React from 'react'
import classsnames from 'classnames'
import { func, arrayOf, oneOfType, node } from 'prop-types'

const Div = ({ children, onClick, ...rest }) => (
  <div onClick={onClick} className={classsnames(rest)}>
    {children}
  </div>
)

const propTypes = {
  onClick: func,
  children: oneOfType([arrayOf(node), node]),
}
Div.propTypes = propTypes

const defaultTypes = {
  onClick: null,
  children: null,
}
Div.defaultTypes = defaultTypes

export default Div
