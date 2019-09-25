import React from 'react'

// eslint-disable-next-line react/prop-types
const Div = ({ margin, flex, children, ...rest }) => (
  <div style={{
    ...(flex && { display: 'flex' }),
    ...(margin && { margin }),
  }}
  {
    ...rest
  }
  >
    {children}
  </div>
)

export default Div
