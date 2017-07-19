# vue-esc
> :running: Vue.js directive to add a document event listener on escape keyup.

[ ![Codeship Status for ianaya89/vue-esc](https://app.codeship.com/projects/3738d4b0-082d-0135-8a91-66ea66f8c9cb/status?branch=master)](https://app.codeship.com/projects/214292)
[![Coverage Status](https://coveralls.io/repos/github/ianaya89/vue-esc/badge.svg?branch=master)](https://coveralls.io/github/ianaya89/vue-esc?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a34ce7d9829c4124823cba10d24ad941)](https://www.codacy.com/app/FindEarth/vue-esc?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ianaya89/vue-esc&amp;utm_campaign=Badge_Grade)


### Support
- Vue.js 2 => `vue-esc@>=2.0.0` [master]
- Vue.js 1 => `vue-esc@1.0.0`

### Install
```bash
$ npm i -S vue-esc
```
```
$ yarn add vue-esc
```

### Use

```javascript
// main.js

import Vue from 'vue';
import VueEsc from 'vue-esc';

Vue.use(VueEsc);
```

```html
<script>
  // Component.vue

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
[MIT License](https://github.com/ianya89/vue-esc/blob/master/LICENSE)


## Style
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

___
**This project was built with [yeoman](http://yeoman.io/) and [generator-vue-component](https://github.com/ianaya89/generator-vue-component) ❤️**
