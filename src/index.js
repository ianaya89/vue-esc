import vueEsc from './vue-esc'

const plugin = {
  install (Vue) {
    Vue.directive('esc', vueEsc)
  }
}

export default plugin
