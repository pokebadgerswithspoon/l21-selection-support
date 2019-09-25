import React from 'react'
import { arrayOf, number, string, oneOfType, func } from 'prop-types'

const propTypes = {
  isSelected: func.isRequired,
  toggleOff: string,
  toggleOn: string,
  selection: arrayOf(oneOfType([number, string])).isRequired,
  update: func.isRequired,
}
const defaultProps = {
  toggleOff: 'Unselect page',
  toggleOn: 'Select page',
}

const ToggleSelection = ({ selection, update, isSelected, toggleOff, toggleOn }) => {
  const selected = selection.filter(isSelected)
  const toggleOffMode = selected.length === selection.length
  const toggle = () => {
    update(selection, !toggleOffMode)
  }

  const label = toggleOffMode
    ? toggleOff
    : toggleOn

  return <label><input type='checkbox' onChange={toggle} checked={toggleOffMode} />{label}</label>
}

ToggleSelection.propTypes = propTypes
ToggleSelection.defaultProps = defaultProps

export default ToggleSelection
