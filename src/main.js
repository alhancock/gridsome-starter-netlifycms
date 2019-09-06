import DefaultLayout from '~/layouts/Default.vue'
require('~/assets/css/style.sass')

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)
    // Add an external CSS file
    head.link.push({
      rel: 'stylesheet',
      href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
    })
}