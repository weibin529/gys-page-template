import store from './store'
import '../../pcss/index.pcss'
import 'gys-css'
import body from './body'

/* eslint-disable no-new */
new GYSPortal({
  bodyComponent: body,
  headerOptions: {
    logo: {
      src: '/inspection/images/inspection.png',
      name: '现场物料验收系统'
    }
  },
  store,
  el: '#app'
})
