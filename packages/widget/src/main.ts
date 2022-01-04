import { App } from 'vue'
import { FormCol } from './Index'
import 'element-plus/theme-chalk/src/base.scss'

FormCol.install = (app: App): void => {
    app.component(FormCol.name, FormCol)
}

export default {
    FormCol
}
