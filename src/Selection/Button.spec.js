import { createRenderer } from 'spec/helper'
import Button from './Button'

const defaultProps = {
  onClick: jest.fn,
}
const render = createRenderer(Button, defaultProps)

describe('Button', () => {
  describe('by default', () => {
    const { tree } = render({})
    const { props } = tree

    it('is enabled', () => {
      const { disabled } = props
      expect(disabled).toBe(false)
    })
  })
  describe('render enabled', () => {
    const button = {
      onClick: jest.fn(),
      children: 'Click me!',
    }
    const { tree } = render(button)
    const { props } = tree

    it('is clickable', () => {
      const { onClick } = props
      onClick()
      expect(button.onClick).toBeCalled()
    })

    it('has label', () => {
      const { children } = props
      expect(children).toBe(button.children)
    })
  })
  describe('render disabled', () => {
    const button = {
      onClick: jest.fn(),
      disabled: true,
    }
    const { tree } = render(button)
    it('is not clickable', () => {
      const { onClick } = tree.props
      onClick()
      expect(button.onClick).not.toBeCalled()
    })
    it('has disabled button inside', () => {
      const e = tree.subTree('button')
      expect(e.props.disabled).toBe(true)
    })
  })
})
