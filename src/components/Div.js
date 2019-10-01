import React from 'react'
import classsnames from 'classnames'

// eslint-disable-next-line react/prop-types
const Div = ({ children, onClick, ...rest }) => (
  <div onClick={onClick} className={classsnames(rest)}>
    {children}
  </div>
)

export default Div
