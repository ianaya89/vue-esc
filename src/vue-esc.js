const vueEsc = {}

vueEsc.cb = new Map() // key: HTMLElement, value: callback

vueEsc.onEvent = function (event) {
  if (event.keyCode === 27) {
    for (const [element, cb] of vueEsc.cb.entries()) {
      cb && cb.call(element, event)
    }
  }
}

vueEsc.update = function (el, binding) {
  if (typeof binding.value !== 'function') {
    throw new Error('Argument must be a function')
  }

  vueEsc.cb.set(el, binding.value)
}

vueEsc.unbind = function (el) {
  vueEsc.cb.delete(el)
}

export default vueEsc
