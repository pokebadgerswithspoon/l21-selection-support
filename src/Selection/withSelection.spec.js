import React from 'react'
import { createRenderer } from 'spec/helper'
import withMockContext from 'spec/mockContext'
import withSelection from './withSelection'
import { SelectionContext } from './SelectionSupport'

const Test = () => <p>Test</p>
const TestContainer = withSelection(Test)
const createSelectionAwareRenderer = selectionApi => withMockContext(
  ctx => (ctx === SelectionContext ? selectionApi : null),
)(createRenderer(TestContainer, {}))


describe('withSelection', () => {
  describe('outside <SelectionSupport/>', () => {
    const render = () => createSelectionAwareRenderer(null)
    it('throws Error', () => {
      expect(render).toThrow(Error)
    })
  })
  describe('inside <SelectionSupport/>', () => {
    const api = {
      method: jest.fn(),
      prop: 'prop',
    }
    const render = () => createSelectionAwareRenderer(api)

    it('does not throw Error', () => {
      expect(render).not.toThrow(Error)
    })

    it('injects API', () => {
      const { tree } = render()
      const { method, prop } = tree.props
      method()
      expect(api.method).toBeCalled()
      expect(prop).toBe(api.prop)
    })
  })
})
