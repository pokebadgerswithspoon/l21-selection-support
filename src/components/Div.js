import React from 'react'
import classsnames from 'classnames'

// eslint-disable-next-line react/prop-types
const Div = ({ margin, flex, children, onClick, ...rest }) => (
  <div style={{
    ...(flex && { display: 'flex' }),
    ...(margin && { margin }),
  }}
  onClick={onClick}
  className={classsnames(rest)}
  >
    {children}
  </div>
)

export default Div
