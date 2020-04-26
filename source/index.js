const createLocalVueRouter = () => {
  delete require.cache[require.resolve('vue-router')]; 
  if (window && window.location && window.location.href) {
    window.location.href = '/'
  }
  return require('vue-router').default
}

export default {
  createLocalVueRouter
}