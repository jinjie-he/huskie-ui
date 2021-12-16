import { App } from 'vue'
import View from './Index.vue'
import 'element-plus/theme-chalk/src/base.scss'

View.install = (app: App): void => {
    app.component(View.name, View)
}

export default View
