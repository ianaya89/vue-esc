# vue-esc

> :running: Vue.js directive to add a document event listener on escape keyup.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)


### Installation
`npm i -S vue-esc`

### Usage

`main.js`
```javascript
import Vue    from 'vue';
import VueEsc from 'vue-esc';

Vue.use(VueEsc);
```

`Component.vue`
```html
<script>
  export default {
    name: 'Component',

    methods: {
      escape() {
        console.log('Escaping...');
      }
    }
  };
</script>

<template lang="pug">
  div(v-esc='escape')   
</template>
```

### Development Setup

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

**This project was built with [yeoman](http://yeoman.io/) and [generator-vue-component](https://github.com/ianaya89/generator-vue-component) ❤️**
