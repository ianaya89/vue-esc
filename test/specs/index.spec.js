/* globals describe it */

import VueEsc from '../../src/vue-esc'

describe('vue-esc', () => {
  it('should attach a new keyup escapce event to document.', () => {
    VueEsc.bind()
  })

  it('should set the event handler for keyup escape event.', () => {
    VueEsc.update(() => {})
  })

  it('should execute given callback after escape was pressed.', () => {
    const e = document.createEvent('HTMLEvents')
    e.initEvent('keyup', false, true)
    e.keyCode = 27

    document.dispatchEvent(e)
  })

  it('should remove a new keyup escapce event to document.', () => {
    VueEsc.unbind()
  })
})
