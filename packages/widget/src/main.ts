import { App } from 'vue'
import { FormCol, FormInput } from './Index'
import 'element-plus/theme-chalk/src/base.scss'
const widgets = { FormCol, FormInput }
for (const widgetsKey in widgets) {
    widgets[widgetsKey].install = (app: App): void => {
        app.component(widgets[widgetsKey].name, widgets[widgetsKey])
    }
}
// FormCol.install = (app: App): void => {
//     app.component(FormCol.name, FormCol)
// }

export { FormCol, FormInput }
