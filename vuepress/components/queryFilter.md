---
title: 'queryFilter'
desc: 'desc'
---

### @huskie-ui/layout

::: demo

```vue
<template>
   <h-query-filter
     :columns="_data.columns"
     :size="_data.size"
     :customSubmitBtn='true'
     :formFields='_data.formFields'
     @reset="onReset"
     @submit="onSubmit"
   >
     <template #customSubmitBtn='{column}'>
       <div>
         <a @click='column?.onReset'>重置</a>
         <a @click='column?.onSubmit'>查询</a>
       </div>
     </template>
   </h-query-filter>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
const getRequest = async () => {
  return {
    data: [
      { label: '全部', value: 'all' },
      { label: '未解决', value: 'open' },
      { label: '已解决', value: 'closed' },
      { label: '解决中', value: 'processing' }
    ]
  }
}
const _data = reactive({
  columns:[
    {
      title: '姓名',
      dataIndex: 'name',
      search: true,
      valueType: 'select',
      request: getRequest,
      fieldProps: { placeholder: '我是测试1数据', span: 12 }
    },
    { title: '性别', dataIndex: 'sex', search: true }, { title: '年龄1', dataIndex: 'age', search: true }, { title: '爱好', dataIndex: 'like', search: true },{ title: '商品', dataIndex: 'goods', search: true }],
  size:'default',
  formFields:{
    rules:{
      sex: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
      ],
    }
  }
})
const onReset = () =>{

}
const onSubmit = () =>{
  console.log('-----')
}
</script>

<style>
.huskie-layout {
   min-height: 500px;
}
.title {
  display: flex;
  align-items: center;
}
a:hover {
  text-decoration: none!important;
}
</style>
```

:::

### huskieLayout Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| settings | 布局参数 | object | — | {} |

### Settings Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| headerTitle | 头栏左边内容 | string/object/function（如果有rener函数则展示render函数内容，如果是object,{slot: 'title'}则可以使用插槽，否则展示字符串） | — | {} |
| headerRight | 头栏右边内容 | string/object/function（如果有rener函数则展示render函数内容，如果是object,{slot: 'title'}则可以使用插槽，否则展示字符串） | — | {} |
| headerStyles | 头栏样式 | object | — | {} |
| menuProps | 侧栏属性传递（继承 el-menu 属性） | object | — | {} |
| triggerCollapse | 是否显示 collapse 图标 | boolean | — | false |
| menuData | 菜单数据 | array | — | [] |
| footer | 底部footer | string/object/function（如果有rener函数则展示render函数内容，如果是object,{slot: 'title'}则可以使用插槽，否则展示字符串） | — | {} |

### MenuProps Attributes

| 参数                | 说明                                                                                | 类型    | 可选值                | 默认值   |
| ------------------- | ----------------------------------------------------------------------------------- | ------- | --------------------- | -------- |
| mode                | 模式                                                                                | string  | horizontal / vertical | vertical |
| collapse            | 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）                                | boolean | —                     | false    |
| background-color    | 菜单的背景色（仅支持 hex 格式）                                                     | string  | —                     | #ffffff  |
| text-color          | 菜单的文字颜色（仅支持 hex 格式）                                                   | string  | —                     | #303133  |
| active-text-color   | 当前激活菜单的文字颜色（仅支持 hex 格式）                                           | string  | —                     | #409EFF  |
| default-active      | 当前激活菜单的 index                                                                | string  | —                     | —        |
| default-openeds     | 当前打开的 sub-menu 的 index 的数组                                                 | Array   | —                     | —        |
| unique-opened       | 是否只保持一个子菜单的展开                                                          | boolean | —                     | false    |
| menu-trigger        | 子菜单打开的触发方式(只在 mode 为 horizontal 时有效)                                | string  | hover / click         | hover    |
| router              | 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 | boolean | —                     | false    |
| collapse-transition | 是否开启折叠动画                                                                    | boolean | —                     | true     |
