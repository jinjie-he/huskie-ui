import { App } from 'vue'
import Widget from './Index.vue'
import 'element-plus/theme-chalk/src/base.scss'

Widget.install = (app: App): void => {
    app.component(Widget.name, Widget)
}

export default Widget
