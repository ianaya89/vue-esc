const vueEsc = {}

vueEsc.onEvent = function (event) {
  if (event.keyCode === 27) {
    vueEsc.cb && vueEsc.cb(event)
  }
}

vueEsc.bind = function (el) {
  vueEsc.onEventBound = vueEsc.onEvent.bind({ el })
  document.addEventListener('keyup', vueEsc.onEventBound)
}

vueEsc.update = function (el, binding) {
  if (typeof binding.value !== 'function') {
    throw new Error('Argument must be a function')
  }

  vueEsc.cb = binding.value
}

vueEsc.unbind = function () {
  document.removeEventListener('keyup', vueEsc.onEventBound)
}

export default vueEsc
