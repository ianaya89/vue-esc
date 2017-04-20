/* global jest describe it expect afterEach */

import vueEsc from '../src/vue-esc'

describe('vue-esc => directive', () => {
  const div = document.createElement('div')

  afterEach(() => {
    vueEsc.onEventBound = undefined
    vueEsc.cb = undefined
  })

  it('has bind, update and unbind methods available', () => {
    expect(typeof vueEsc.bind).toBe('function')
    expect(typeof vueEsc.update).toBe('function')
    expect(typeof vueEsc.unbind).toBe('function')
  })

  describe('bind', () => {
    it('defines onEventBound function', () => {
      vueEsc.bind(div)
      expect(typeof vueEsc.onEventBound).toBe('function')
    })
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
      expect(vueEsc.cb).toBe(cb)
    })
  })

  describe('onEvent', () => {
    const message = 'it calls the callback if the event keyCode is 27 (esc key)'

    it(message, () => {
      const event = { keyCode: 27 }
      const onEventBound = vueEsc.onEvent.bind({ el: div })

      vueEsc.cb = jest.fn()

      onEventBound(event)
      expect(vueEsc.cb).toHaveBeenCalledWith(event)
    })
  })
})
