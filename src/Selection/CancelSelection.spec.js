import { createRenderer } from '../spec/helper'
import CancelSelection from './CancelSelection'

const createProps = () => ({
  cancel: jest.fn(),
})

const render = createRenderer(CancelSelection, createProps())

describe('CancelSelection', () => {
  describe('render', () => {
    const { tree } = render({})
    it('has onClick rendered', () => {
      const { onClick } = tree.props
      expect(onClick).toBeFunction()
    })
  })
  describe('interaction with selection', () => {
    const { cancel } = createProps()
    const { tree } = render({ cancel })
    it('calls cancel() on click', () => {
      const { onClick } = tree.props
      onClick()
      expect(cancel).toBeCalled()
    })
  })
})
