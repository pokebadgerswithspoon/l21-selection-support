import React from 'react'
import { shallowRender } from 'skin-deep'

global.console.warn = (message) => {
  throw message
}

global.console.error = (message) => {
  throw message
}

const getInstance = (tree) => {
  try {
    return tree.getMountedInstance()
  } catch (e) {
    return {}
  }
}

const safeGetLifecycleMethods = (tree) => {
  const instance = getInstance(tree)
  const collectMethods = (methods, methodName) => (
    instance[methodName]
      ? { ...methods, [methodName]: instance[methodName].bind(instance) }
      : methods
  )

  return [
    'componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'shouldComponentUpdate',
    'componentWillUpdate',
    'componentDidUpdate',
    'componentWillUnmount',
  ].reduce(collectMethods, {})
}

/**
 * Takes an instantiated Component (via createElement or createFactory)
 * and returns a skin-deep mounted component
 * ComponentInstance => SkinDeepObject
 */
const skinDeepRender = (ComponentInstance, context = {}) => {
  const tree = shallowRender(ComponentInstance, context)
  return {
    instance: getInstance(tree),
    tree,
    ...safeGetLifecycleMethods(tree),
  }
}

/**
 * Takes a React Component, props, and children
 * and returns a skin-deep mounted component
 * (Component, props, children) => SkinDeepObject
 */
const render = (Component, props = {}, context) => (
  skinDeepRender(React.createElement(Component, props), context)
)

/**
 * Takes a React Component, defaultProps
 * and returns a function that takes props and children
 * and returns a skin-deep mounted component with defaultProps + props
 * (Component, defaultProps) => (props, children) => SkinDeepObject
 */
const createRenderer = (Component, defaultProps, context) => props => render(
  Component,
  { ...defaultProps, ...props },
  context,
)

export {
  createRenderer,
}
