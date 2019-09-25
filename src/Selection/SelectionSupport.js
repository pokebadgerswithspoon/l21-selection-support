import React, { createContext, useState } from 'react'
import { arrayOf, oneOfType, node } from 'prop-types'

const propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired,
}

const SelectionContext = createContext()

const SelectionSupport = ({ children }) => {
  const [selected, setSelection] = useState({})
  const [enabled, setEnabled] = useState(false)

  const update = (value, state) => {
    const enableIfNeeded = () => (state && !enabled) && setEnabled(true)

    const diff = Array.isArray(value)
      ? value.reduce((acc, v) => ({ ...acc, [v]: state }), {})
      : ({ [value]: state })
    enableIfNeeded()
    setSelection({ ...selected, ...diff })
  }
  const list = Object.keys(selected).filter(k => selected[k])
  const isSelected = k => !!selected[k]
  const clear = () => setSelection({})
  const cancel = () => {
    clear()
    setEnabled(false)
  }

  return (
    <SelectionContext.Provider value={{
      /* eslint-disable sort-keys */
      cancel,
      clear,
      list,
      update,
      isSelected,
      enabled,
      setEnabled,
      /* eslint-enable sort-keys */
    }}
    >
      { children }
    </SelectionContext.Provider>
  )
}

SelectionSupport.propTypes = propTypes

export { SelectionContext }
export default SelectionSupport
