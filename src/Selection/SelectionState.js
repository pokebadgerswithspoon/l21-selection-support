import React from 'react'
import { number, string, oneOfType, arrayOf, bool, func } from 'prop-types'
import Div from '../components/Div'

const propTypes = {
  enabled: bool,
  list: arrayOf(oneOfType([number, string])).isRequired,
  onClick: func,
  title: string,
  visible: bool,
  warning: bool,
}
const defaultProps = {
  enabled: true,
  onClick: null,
  title: null,
  visible: true,
  warning: false,
}

const disabled = {
  cursor: 'not-allowed',
}
const decorDisabled = {
  'bg-silver': true,
  black: true,
}
const decorWarn = warning => (warning
  ? ({ 'bg-red': true })
  : ({ 'bg-blue': true }))

const decor = (warning, enabled) => (enabled
  ? decorWarn(warning)
  : decorDisabled)

const SelectionState = ({ enabled, list, visible, title, warning, onClick }) => visible && (
  <Div
    btn
    btn-primary
    {
    ...{
      title,
      ...(enabled && { onClick }),
      ...decor(warning, enabled),
      ...(!enabled && { style: disabled }),
    }
  }
  >✓ {list.length}
  </Div>
)

SelectionState.propTypes = propTypes
SelectionState.defaultProps = defaultProps

export default SelectionState