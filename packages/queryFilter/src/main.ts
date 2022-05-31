import { App } from 'vue'
import QueryFilter from './Index.vue'
import 'element-plus/theme-chalk/src/base.scss'

QueryFilter.install = (app: App): void => {
    app.component(QueryFilter.name, QueryFilter)
}

export default QueryFilter
