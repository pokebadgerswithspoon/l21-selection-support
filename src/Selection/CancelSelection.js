import { func, string } from 'prop-types'
import React from 'react'
import Button from './Button'

const propTypes = {
  cancel: func.isRequired,
  clearLabel: string,
}
const defaultProps = {
  clearLabel: 'Clear',
}

const style = { color: '#c11010' }

const CancelSelection = ({ cancel, clearLabel }) => (
  <Button {...{ onClick: cancel, outline: false, style }}>✖ {clearLabel}</Button>
)

CancelSelection.propTypes = propTypes
CancelSelection.defaultProps = defaultProps

export default CancelSelection
