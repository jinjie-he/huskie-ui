---
title: 'Layout' desc: 'desc'
---

### @huskie-ui/table

::: demo

```vue

<template>
  <h-table
    ref='table'
    :request='getTableData'
    :columns='columns'
    :tableFields='tableFields'
    :tableEvents='tableEvents'>
    <template #toolBar>
      <a>添加</a>
    </template>
    <template #headerOption='{ column }'>
      {{column.label}}
    </template>
    <template #option='{ row }'>
      <div>
        <a @click='getTable'>删除</a>
        <a @click='onOption(row)'>添加</a>
      </div>
    </template>
  </h-table>
</template>
<script lang='ts' setup>
import { ref } from 'vue'

const table = ref<HTMLElement>(null)
const getTableData = (params) => {
  return new Promise(resolve => {
    resolve({
      data: [{
        name: 'junjie',
        age: '24',
        sex: '男'
      }, {
        name: 'violin',
        age: '22',
        sex: '女'
      },
        {
          name: 'Xiaoping',
          age: '22',
          sex: '女'
        },
        {
          name: 'Xiaopin',
          age: '22',
          sex: '女'
        },
        {
          name: 'xiaohong',
          age: '22',
          sex: '女'
        }],
      total: 5
    })
  })
}
const rowClassName = ({ row, rowIndex }) => {
  if (rowIndex === 0) {
    return 'warning-row'
  } else if (rowIndex === 4) {
    return 'success-row'
  }
  return ''
}
const getTable = () => {
  table.value.tableRef?.toggleAllSelection()
}
const selectionChange = (val) => {
  console.log([...val])
}
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
const columns = [
  { columnFields: { type: 'selection', width: 55 } },
  {
    title: '姓名',
    dataIndex: 'name',
    search: true,
    valueType: 'select',
    request: getRequest,
    fieldProps: { placeholder: '我是测试1数据', span: 6 }
  },
  { title: '年龄', dataIndex: 'age', search: true }, { title: '性别', dataIndex: 'sex', search: true },
  { title: '年龄1', dataIndex: 'age', search: true }, { title: '爱好', dataIndex: 'like', search: true },
  { title: '操作', dataIndex: 'option', sortName: 'option', headerSort: true }]
const tableFields = {
  border: true,
  rowClassName
}
const tableEvents = {
  selectionChange
}
const onOption = (row) => {
  console.log(row.name)
}

</script>
<style>
.el-table .warning-row {
  background-color: darkseagreen;
}

.el-table .success-row {
  background-color: lightskyblue;
}
</style>
```

:::

### huskieTable 属性

属性除继承自 el-table属性外，增加 columns配置， paginationFields 分页属性配置

| 参数                    | 说明                                                                                          | 类型                                                      | 可选值                          | 默认值                                                        |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------- | ------------------------------------------------------------- |
| dataSource              | Table 的数据，protable 推荐使用 request 来加载                                                  | T[]                                                     | —                                |  —
| request                 | 获取 dataSource 的方法                                                                        | (params?: {pageSize,current,...formSearch}) => {data, total, currentPage, pageSize}                                                     | —                               | —                                                             |
| params                  | 用于 request 查询的额外参数                                                                    | object                                           | —                               | —                                                             |
| columns                 | [columns配置](#columns-attributes)                                                                             | object                                          | —                               | —                                                             |
| tableFields             | [element+ table组件的参数配置](https://element-plus.gitee.io/zh-CN/component/table.html#table-%E5%B1%9E%E6%80%A7)                                                                  | object                                                   | —                               | —                                                         |
| tableEvents             | [element+ table组件的事件配置](https://element-plus.gitee.io/zh-CN/component/table.html#table-%E4%BA%8B%E4%BB%B6)                                                                  | object                                                   | —                               | —                                                        |
| paginationFields        | element+ pagination组件的参数配置，其中添加了align,可选值left,center,right                        | object                                                    | —           | —                                                             |

### columns 属性

| 参数                    | 说明                                                                                          | 类型                                                      | 可选值                          | 默认值                                                        |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------- | ------------------------------------------------------------- |
| title                   | 列头显示文字                                                                                  | string                                                     | —                                |  —
| request                 | 当valueType为 select,下拉请求项                                                                | (params?: {}) => {data}                                                     | —                               | —                                                             |
| dataIndex               | 值的枚举，会自动转化把值当成 key 来取出要显示的内容                                                 | string                                           | —                               | —                                                             |
| valueType               | 值的类型,会生成不同的渲染器                                                                      | string                                          | input/select                              | input                                                             |
| search                  | 配置列的搜索相关，false 为隐藏                                                                  | boolean                                          | true/false                                | false                                                         |
| headerSort              | 列头显示文字是否使用sort自定义，sort名字为header+dataIndex                                        | boolean                                          | true/false                                | false                                                        |
| sortName                | 行内容采用sort自定义的name                                                                     | string                                                    | —           | —                                                             |
| columnFields            | [element+ table-column的参数配置](https://element-plus.gitee.io/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7)                                                                     | object                                                    | —           | —                                                             |
| fieldProps              | 查询表单的 props，会透传给表单项,如果渲染出来是 Input,就支持 input 的所有 props，同理如果是 select，也支持 select 的所有 props。也支持方法传入                                                                     | string                                                    | —           | —                                                             |
| options                 | 当valueType为 select,下拉选项的数据                                                             | Array                                                    | —           | —                                                             |

### huskieTable 插槽
| 插槽名                    | 说明 |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| toolBar                 | table 顶部工具栏自定义卡槽{formSearch}
| 为sortName定义的名字       |行内容自定义的卡槽{row}
| header+dataIndex         |列头显示文字自定义卡槽{column}
| append                   |插入至表格最后一行之后的内容， 如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。 若表格有合计行，该 slot 会位于合计行之上。
| empty                    |you can customize content when data is empty.
