import React, { useContext } from 'react'
import { SelectionContext } from './SelectionSupport'

const withSelection = (Component) => {
  const name = Component.displayName || Component.name || 'Component'
  const Container = (props) => {
    const selectionApi = useContext(SelectionContext)
    if (!selectionApi) {
      throw new Error('SelectionContext is not available.'
      + ' Did you wrap your selection into <SelectionSupport/>?')
    }
    return <Component {...{ ...selectionApi, ...props }} />
  }
  Container.displayName = `withSelection(${name})`
  return Container
}

export default withSelection
