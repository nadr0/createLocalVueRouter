# createLocalVueRouter

returns a VueRouter class that clears global variables it polluted in a previous import in Node.js.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Example

```javascript
// inside a vue-test-utils vue unit test
// $ npx vue create unit-test-project
// $ cd unit-test-project
// $ vue add @vue/unit-mocha
// $ npm run test:unit

// Create a new unit test with the source code below.
import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import createLocalVueRouter from 'createlocalvuerouter';

const routes = [
  {
    path: '/',
    name: 'root'
  },
  {
    path: '/home',
    name: 'home'
  },
  {
    path: '/options',
    name: 'options'
  },
  {
    path: '/profile',
    name: 'profile'
  }
];

describe('Vue Router', () => {
  describe('initialize a vue router instance', () => {
    it('should default to root route name', () => {
      const localVue = createLocalVue()
      const VueRouter = createLocalVueRouter();
      localVue.use(VueRouter)
      const router = new VueRouter({routes})
      const wrapper = shallowMount(HelloWorld, { localVue, router})
      const actual = wrapper.vm.$router.currentRoute.name
      const expected = 'root'
      expect(actual).to.equal(expected)
    })
    describe('when navigating', () => {
      it("should be able to access home", () => {
        const localVue = createLocalVue()
        const VueRouter = createLocalVueRouter();
        localVue.use(VueRouter)
        const router = new VueRouter({routes})
        const wrapper = shallowMount(HelloWorld, { localVue, router})
        wrapper.vm.$router.push('home')
        const actual = wrapper.vm.$router.currentRoute.name
        const expected = 'home'
        expect(actual).to.equal(expected)
      })
      it("should be able to access options from root path", () => {
        const localVue = createLocalVue()
        const VueRouter = createLocalVueRouter();
        localVue.use(VueRouter)
        const router = new VueRouter({routes})
        const wrapper = shallowMount(HelloWorld, { localVue, router})
        const currentRouteName = wrapper.vm.$router.currentRoute.name
        expect(currentRouteName).to.equal('root')
        wrapper.vm.$router.push('options')
        const actual = wrapper.vm.$router.currentRoute.name
        const expected = 'options'
        expect(actual).to.equal(expected)
      })
    })
  })
})
```

# Unit testing

This library should be used with vue test utils to allow for independent testing of the VueRouter class in unit tests. 

Similar to createLocalVue I wanted to make a createLocalVueRouter to be able to test seperate VueRouter instances across unit tests.

Try for yourself, go through the CLI commands in the source code above and replace the import statement with `import VueRouter from "vue-router"` and see the last unit test fail because of global variables being edited.

i.g.
```javascript
// swap this import
import createLocalVueRouter from 'createlocalvuerouter';

// for this import
import VueRoute from 'vue-router';

// The last unit test will fail.
```

# Usage

```
npm install createlocalvuerouter
```

See it out on npm [here](https://www.npmjs.com/package/createlocalvuerouter)

# Installation

This will allow you to locally develop the code. 

## Clone

 Clone `https://github.com/nadr0/createLocalVueRouter` to your machine

## Setup

We need to install all the dependencies for you to compile the source code into the distribution source.

```
npm install
```

## Usage

`source/index.js` file is all the source code of the library. Import it into whatever application you want.

# Code Structure

All the source for the library is in `source/index.js`. 

# Documentation

```javascript
import createLocalVueRouter from 'createlocalvuerouter';
const VueRouter = createLocalVueRouter();
```

# Contributing

Feel free, make some issues make some PRs.

# Support

Reach out to me at one of the following places

- Website at kevinnadro.com

# License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
- [MIT License](https://opensource.org/licenses/mit-license.php)