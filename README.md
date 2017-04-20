# vue-esc

> :running: Vue.js directive to add a document event listener on escape keyup.

### Install
`npm i -S vue-esc`

`yarn add vue-esc`

### Use

`main.js`
```javascript
import Vue from 'vue';
import VueEsc from 'vue-esc';

Vue.use(VueEsc);
```

`Component.vue`
```html
<script>
  export default {
    name: 'Component',

    methods: {
      escape(event) {
        console.log('Esc key pressed.', `Event: ${event}`);
      }
    }
  };
</script>

<template>
  <div v-esc="escape"></div>
</template>
```

## License
[MIT License](https://github.com/ndelvalle/vue-esc/blob/master/LICENSE)


## Style
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)


===
**This project was built with [yeoman](http://yeoman.io/) and [generator-vue-component](https://github.com/ianaya89/generator-vue-component) ❤️**
