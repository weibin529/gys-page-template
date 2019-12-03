const jsBaseUrl = '/wl/web-components/public-lib/'
const cssBaseUrl = '/wl/web-components/public-lib/'
const jsList = [
  'vue/vue.min.js',
  'vuex/vuex.min.js',
  'vue-router/vue-router.min.js',
  'axios/axios.min.js',
  'element/js/index.js',
  'gys-page-frame/index.js',
  'old/jquery-1.11.3.min.js',
  'old/cookie.js',
  'old/permission.js'
]
const cssList = [
  'element/css/element.css',
  'gys-page-frame/index.css'
]

function generateList (list, baseUrl) {
  return list.map(item => baseUrl + item)
}
module.exports = {
  jsList: generateList(jsList, jsBaseUrl),
  cssList: generateList(cssList, cssBaseUrl)
}
