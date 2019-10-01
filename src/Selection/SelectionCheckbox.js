import React from 'react'
import { oneOfType, number, string, func } from 'prop-types'

const propTypes = {
  isSelected: func.isRequired,
  update: func.isRequired,
  value: oneOfType([string, number]).isRequired,
}

const idFor = value => `SelectionCheckbox-${value}`

const SelectionCheckbox = ({ value, isSelected, update }) => {
  const checked = isSelected(value)
  const toggle = () => update(value, !checked)

  return (
    <input
      id={idFor(value)}
      type='checkbox'
      checked={checked}
      onChange={toggle}
      value={value}
    />
  )
}

const SelectionCheckboxLabel = ({ value, children }) => (
  <label htmlFor={idFor(value)}>{children || value}</label>
)

SelectionCheckboxLabel.propTypes = {
  value: oneOfType([string, number]).isRequired,
  children: oneOfType([string, number]),
}

SelectionCheckbox.propTypes = propTypes

export { SelectionCheckboxLabel }
export default SelectionCheckbox
