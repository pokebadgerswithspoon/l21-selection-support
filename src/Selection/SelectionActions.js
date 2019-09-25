import React from 'react'
import { bool, node, arrayOf, oneOfType, func } from 'prop-types'
import createDiv from './createDiv'

const propTypes = {
  children: oneOfType([node, arrayOf(node)]),
  enabled: bool.isRequired,
  Action: oneOfType([func]),
  Actions: oneOfType([func])
}
const defaultProps = {
  children: [],
  Actions: createDiv({flex: true, margin: '0 0 0.5em 0'}),
  Action: createDiv({margin: '0 0.5em 0 0'}),
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
          .map((child, i) => (<Action key={keyFor(child, i)} mr1>{child}</Action>))
      }
    </Actions>
  )
}
SelectionActions.propTypes = propTypes
SelectionActions.defaultProps = defaultProps

export default SelectionActions
