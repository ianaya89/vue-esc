/* global jest describe it expect afterEach */

import vueEsc from '../src/vue-esc'

describe('vue-esc => directive', () => {
  const div = document.createElement('div')

  afterEach(() => {
    vueEsc.cb.clear()
  })

  it('has onEvent, update and unbind methods available', () => {
    expect(typeof vueEsc.onEvent).toBe('function')
    expect(typeof vueEsc.update).toBe('function')
    expect(typeof vueEsc.unbind).toBe('function')
  })

  describe('update', () => {
    it('throws if value is not a function', () => {
      const updateWithNoFunction = () => {
        vueEsc.update(div, {})
      }
      expect(updateWithNoFunction).toThrowError(/Argument must be a function/)
    })

    it('saves the callback', () => {
      const cb = () => {}
      vueEsc.update(div, { value: cb })
      expect(vueEsc.cb.size).toEqual(1)
      expect(vueEsc.cb.has(div)).toBeTruthy()
      expect(vueEsc.cb.get(div)).toBe(cb)
    })

    it('overrides an existing callback for the same element', () => {
      const cb1 = () => {}
      vueEsc.update(div, { value: cb1 })
      expect(vueEsc.cb.size).toEqual(1)
      expect(vueEsc.cb.get(div)).toBe(cb1)

      const cb2 = () => {}
      vueEsc.update(div, { value: cb2 })
      expect(vueEsc.cb.size).toEqual(1)
      expect(vueEsc.cb.get(div)).toBe(cb2)
    })

    it('registers callbacks from different elements', () => {
      const cb1 = () => {}
      vueEsc.update(div, { value: cb1 })
      expect(vueEsc.cb.size).toEqual(1)
      expect(vueEsc.cb.get(div)).toBe(cb1)

      const div2 = document.createElement('div')
      const cb2 = () => {}
      vueEsc.update(div2, { value: cb2 })
      expect(vueEsc.cb.size).toEqual(2)
      expect(vueEsc.cb.get(div2)).toBe(cb2)
    })
  })

  describe('onEvent', () => {
    const message = 'it calls the callback if the event keyCode is 27 (esc key)'

    it(message, () => {
      const event = { keyCode: 27 }

      const div2 = document.createElement('div')
      const cb1 = jest.fn()
      const cb2 = jest.fn()

      vueEsc.cb.set(div, cb1)
      vueEsc.cb.set(div2, cb2)

      vueEsc.onEvent(event)
      expect(cb1).toHaveBeenCalledWith(event)
      expect(cb2).toHaveBeenCalledWith(event)
    })
  })

  describe('onEvent', () => {
    const message = 'it calls the callback with `this` set to the HTML element'

    it(message, () => {
      const event = {
        keyCode: 27
      }

      const cb1 = jest.fn()

      vueEsc.cb.set(div, cb1)

      vueEsc.onEvent(event)
      expect(cb1).toHaveBeenCalledWith(event)

      const cb1ValueOfThis = cb1.mock.instances[0]
      expect(cb1ValueOfThis).toBe(div)
    })
  })

  describe('onEvent', () => {
    it('ignores events which are not for the ESC key', () => {
      const event = {
        keyCode: 0
      }

      const cb1 = jest.fn()
      vueEsc.cb.set(div, cb1)

      vueEsc.onEvent(event)
      expect(cb1).not.toHaveBeenCalledWith(event)
    })
  })

  describe('unbind', () => {
    it('unregisters the callback', () => {
      const div2 = document.createElement('div')
      const cb1 = jest.fn()
      const cb2 = jest.fn()

      vueEsc.cb.set(div, cb1)
      vueEsc.cb.set(div2, cb2)
      expect(vueEsc.cb.size).toBe(2)

      vueEsc.unbind(div)
      expect(vueEsc.cb.size).toBe(1)
      expect(vueEsc.cb.has(div)).toBeFalsy()
    })
  })
})
