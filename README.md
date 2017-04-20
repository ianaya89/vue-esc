# vue-esc

> :running: Vue.js directive to add a document event listener on escape keyup.

### Support
- Vue.js 2 => vue-esc@>=2.0.0
- Vue.js 1 => vue-esc@1.0.0

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

### Development

```bash
# install dependencies
$ npm install

# dev mode
$ npm run dev

# test
$ npm run test

# build
$ npm run build
```

## License
[MIT License](https://github.com/ndelvalle/vue-esc/blob/master/LICENSE)


## Style
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

___
**This project was built with [yeoman](http://yeoman.io/) and [generator-vue-component](https://github.com/ianaya89/generator-vue-component) ❤️**
