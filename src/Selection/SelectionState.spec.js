import { createRenderer } from 'spec/helper'
import Div from 'components/Div'
import SelectionState from './SelectionState'

const defaultProps = {
  list: [],
  onClick: jest.fn(),
}
const render = createRenderer(SelectionState, defaultProps)

describe('SelectionState', () => {
  it('renders', () => {
    const { tree } = render({})
    const b = tree.subTree(Div)
    expect(b).toBeTruthy()
  })

  describe('enabled', () => {
    describe.each([
      [true, 'bg-red', 'red'],
      [false, 'bg-blue', 'blue'],
    ])('warning prop: %s', (warning, flag, color) => {
      const { tree: { props } } = render({ warning })
      it(`has ${color} background`, () => {
        const { [flag]: flagToggle } = props
        expect(flagToggle).toBeTrue()
      })
    })

    const clickMock = jest.fn()
    const { tree: { props } } = render({ enabled: true, onClick: clickMock })
    it('has no cursor alterations', () => {
      const { style } = props
      expect(style).toBeUndefined()
    })
    it('is clickable', () => {
      const { onClick } = props
      onClick()
      expect(clickMock).toHaveBeenCalled()
    })
  })
  describe('disabled', () => {
    describe.each([
      [{ warning: true }, 'it is also a warning'],
      [{ warning: false }, 'it is NOT a warning'],
    ])('background', (warning, message) => {
      const { tree: { props } } = render({ ...warning, enabled: false })

      it(`has silver-bg when ${message}`, () => {
        const { 'bg-silver': bgSilver } = props
        expect(bgSilver).toBe(true)
      })
    })

    const { tree: { props } } = render({ enabled: false })

    it('has not-allowed cursor', () => {
      const { style } = props
      const { cursor } = style
      expect(cursor).toEqual('not-allowed')
    })
    it('is NOT clickable', () => {
      const { onClick } = props
      expect(onClick).toBeUndefined()
    })
  })
})
