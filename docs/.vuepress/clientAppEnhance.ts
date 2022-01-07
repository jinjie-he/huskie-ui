
/**
 * 全局注册组件 下文注释：重要、勿删，plop在自动新增组件的时候注入，不需要手动添加
 */
import { defineClientAppEnhance } from '@vuepress/client'
import 'element-plus/theme-chalk/src/index.scss'
// -- APPSTART ITEMS HERE --
import { FormCol } from '@huskie-ui/widget'
import HQueryFilter from '@huskie-ui/queryFilter'
import HTable from '@huskie-ui/table'
import HLayout from '@huskie-ui/layout'

export default defineClientAppEnhance(({ app }) => {
  // -- APPEND ITEMS HERE --
app.component('FormCol', FormCol)
app.component('HQueryFilter', HQueryFilter)
app.component('HTable', HTable)
app.component('HLayout', HLayout)

})
