import React from 'react'
import { createRenderer } from '../spec/helper'
import SelectionSupport, { SelectionContext } from './SelectionSupport'

const children = <p>Hey!</p>
const render = createRenderer(SelectionSupport, { children })

describe('SelectionSupport', () => {
  const { tree } = render()

  describe('selection context', () => {
    const provider = tree.subTree(SelectionContext.Provider)
    it('is provided', () => {
      expect(provider).toBeTruthy()
    })
    it('contains children', () => {
      const { props } = provider
      expect(props.children).toBe(children)
    })
  })
})

describe('SelectionContext', () => {
  const { tree } = render()
  describe('.value', () => {
    const { props: { value } } = tree.subTree(SelectionContext.Provider)

    it('has API to manipulate selection', () => {
      const { cancel, list, update, isSelected, enabled, setEnabled } = value
      expect(cancel).toBeFunction()
      expect(list).toBeArray()
      expect(update).toBeFunction()
      expect(isSelected).toBeFunction()
      expect(enabled).toBe(false)
      expect(setEnabled).toBeFunction()
    })

    describe('workflow', () => {
      const api = () => tree.subTree(SelectionContext.Provider).props.value
      it('is disabled and empty after init', () => {
        const { list, enabled } = api()
        expect(list).toEqual([])
        expect(enabled).toEqual(false)
      })
      it('update() selects and unselects', () => {
        api().update(1, true)
        expect(api().isSelected(1)).toBe(true)
        api().update(1, false)
        expect(api().isSelected(1)).toBe(false)
      })
      it('cancel() disables and uselects', () => {
        api().update(1, true)
        expect(api().isSelected(1)).toBe(true)
        expect(api().enabled).toBe(true)
        api().cancel()
        expect(api().enabled).toBe(false)
        expect(api().isSelected(1)).toBe(false)
      })
    })
  })
})
