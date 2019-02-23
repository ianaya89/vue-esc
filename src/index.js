import vueEsc from './vue-esc'

const plugin = {
  install (Vue) {
    Vue.directive('esc', vueEsc)
    document.addEventListener('keyup', vueEsc.onEvent)
  }
}

export default plugin
