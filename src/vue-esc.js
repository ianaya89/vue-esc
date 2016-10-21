export default {
  action() {
    console.log('Escaping...');
  },

  callback(e) {
    if (e.keyCode === 27) {
      this.action && this.action();
    }
  },

  bind() {
    this.bindedCallback = this.callback.bind(this);
    document.addEventListener('keyup', this.bindedCallback, false);
  },

  update(val) {
    if (typeof val !== 'function') {
      throw new Error(`The given argument of v-esc: "${val}", is not a function`);
    }

    this.action = val;
  },

  unbind() {
    document.removeEventListener('keyup', this.bindedCallback, false);
  }
};
