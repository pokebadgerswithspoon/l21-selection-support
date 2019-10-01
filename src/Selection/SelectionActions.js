import React from 'react'
import { bool, node, arrayOf, oneOfType, func } from 'prop-types'
import Div from 'src/components/Div'

const propTypes = {
  children: oneOfType([node, arrayOf(node)]),
  enabled: bool.isRequired,
  Action: oneOfType([func]),
  Actions: oneOfType([func])
}
const defaultProps = {
  children: [],
  /* eslint-disable react/prop-types */
  Actions: ({ children }) => <Div flex mb1>{children}</Div>,
  Action: ({ children }) => <Div mr1>{children}</Div>,
  /* eslint-enable react/prop-types */
}
const asArray = e => Array.isArray(e) ? e : [e]

const SelectionActions = ({ enabled, children, Actions, Action }) => {
  const keyFor = (child, i) => child.props.key || `selection-action-${i}`
  const isActionAvailable = enabled
    ? () => true
    : action => action.props.visible
  const actions = asArray(children).filter(isActionAvailable)

  return actions.length > 0 && (
    <Actions>
      {
        actions
          .map((child, i) => (<Action key={keyFor(child, i)}>{child}</Action>))
      }
    </Actions>
  )
}
SelectionActions.propTypes = propTypes
SelectionActions.defaultProps = defaultProps

export default SelectionActions
