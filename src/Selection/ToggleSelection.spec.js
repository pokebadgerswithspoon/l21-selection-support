import { createRenderer } from 'spec/helper'
import ToggleSelection from './ToggleSelection'

const defaultProps = {
  isSelected: () => false,
  selection: ['id 1', 3, 'exrtra id', 'and more'],
  update: jest.fn(),
}

const render = createRenderer(ToggleSelection, defaultProps)

describe('ToggleSelection', () => {
  describe('render', () => {
    const { tree } = render({})
    it('has onChange rendered', () => {
      const input = tree.subTree('input')
      const { onChange } = input.props
      expect(onChange).toBeFunction()
    })
  })
  describe('interaction with selection', () => {
    const createProps = (selected) => {
      const toFlags = () => selected.reduce((acc, id) => ({ ...acc, [id]: true }), {})
      const isSelected = Array.isArray(selected)
        ? v => toFlags(selected)[v]
        : () => selected
      return {
        ...defaultProps,
        isSelected,
      }
    }

    const cases = [
      [createProps(false), true, 'Selection is empty', 'Toggles ON', 'Unchecked'],
      [createProps([3]), true, 'Selection not empty nor full', 'Toggles On', 'Unchecked'],
      [createProps(true), false, 'Everything is already selected', 'Toggles off', 'Checked'],
    ]
    describe.each(cases)('How toggle works', (props, toggleOn, caseMsg, toggleMsg, checkBoxMsg) => {
      describe(`Case: ${caseMsg}`, () => {
        const { update, selection } = props
        const { tree } = render(props)
        const input = tree.subTree('input')
        it(`Toggles: ${toggleMsg}`, () => {
          const { onChange } = input.props

          onChange()
          expect(update).toBeCalledWith(selection, toggleOn)
        })
        it(`Checkbox input is: ${checkBoxMsg}`, () => {
          const { checked } = input.props
          expect(checked).not.toEqual(toggleOn)
        })
      })
    })
  })
})
