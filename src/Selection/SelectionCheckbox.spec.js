import { createRenderer } from 'spec/helper'
import SelectionCheckbox, { SelectionCheckboxLabel } from './SelectionCheckbox'

const createProps = id => ({
  isSelected: jest.fn(),
  value: id || 'something',
  update: jest.fn(),
})

const renderCheckbox = createRenderer(SelectionCheckbox, createProps())
const renderLabel = createRenderer(SelectionCheckboxLabel, createProps())

describe('SelectionCheckbox', () => {
  describe('render', () => {
    const { tree } = renderCheckbox({ value: 'The ID' })
    it('has id rendered', () => {
      const { id } = tree.props
      expect(id).toContain('The ID')
    })
  })
  describe('interaction with selection', () => {
    const createCase = selected => [{ ...createProps(), isSelected: () => selected }, selected]
    const cases = [
      createCase(true),
      createCase(false),
    ]
    describe.each(cases)('update()', (props, selected) => {
      const { tree } = renderCheckbox(props)
      const { value, update } = props
      it('calls update on toggle', () => {
        const { props: { onChange } } = tree.subTree('input')
        onChange()
        expect(update).toBeCalledWith(value, !selected)
      })
    })

    describe.each(cases)('isSelected()', (props, selected) => {
      const { tree } = renderCheckbox(props)
      const { props: { checked } } = tree.subTree('input')
      it('puts checkmark according to selection', () => {
        expect(checked).toEqual(selected)
      })
    })
  })
})

describe('SelectionCheckboxLabel', () => {
  describe('render', () => {
    const { tree } = renderLabel({ value: 'The ID' })
    it('has value rendered', () => {
      expect(tree.text()).toEqual('The ID')
    })
    it('has htmlFor', () => {
      const { htmlFor } = tree.props
      expect(htmlFor).toContain('The ID')
    })
  })
  describe('relation with SelectionCheckbox', () => {
    const value = '010203'
    const { tree: a } = renderLabel({ value })
    const { tree: b } = renderCheckbox({ value })
    it('has htmlFor mathing id', () => {
      const { htmlFor } = a.props
      const { id } = b.props
      expect(htmlFor).toEqual(id)
    })
  })
})
