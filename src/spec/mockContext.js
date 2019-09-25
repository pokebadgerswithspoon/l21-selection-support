// This file should be imported before react

import { useContext } from 'react'
import isFunction from 'lodash/isFunction'

const actualUseContext = require.requireActual('react').useContext
jest.mock('react', () => ({
  ...require.requireActual('react'),
  useContext: jest.fn(),
}))
useContext.mockImplementation(actualUseContext)

const withMockContext = context => (block) => {
  useContext.mockImplementation(isFunction(context) ? context : () => context)
  const ret = block()
  useContext.mockImplementation(actualUseContext)
  return ret
}

export default withMockContext
