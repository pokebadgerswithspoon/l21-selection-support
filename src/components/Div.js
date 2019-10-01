import React from 'react'
import classsnames from 'classnames'
import { func, arrayOf, oneOfType, node, string } from 'prop-types'

const Div = ({ children, onClick, title, style, ...rest }) => (
  <div className={classsnames(rest)}
    {...{
      ...(title && { title }),
      ...(onClick && { onClick }),
      ...(style && { style }),
    }}
  >
    {children}
  </div>
)

const propTypes = {
  onClick: func,
  title: string,
  style: string,
  children: oneOfType([arrayOf(node), node]),
}
Div.propTypes = propTypes

const defaultTypes = {
  onClick: null,
  title: null,
  style: null,
  children: null,
}
Div.defaultTypes = defaultTypes

export default Div
