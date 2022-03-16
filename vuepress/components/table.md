---
title: 'Layout'
desc: 'desc'
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
  } else if (rowIndex === 1) {
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
    fieldProps: { placeholder: '我是测试1数据',span:6 }
  },
  { title: '年龄', dataIndex: 'age',search: true}, { title: '性别', dataIndex: 'sex', search: true },
  { title: '年龄1', dataIndex: 'age',search: true }, { title: '爱好', dataIndex: 'like', search: true },
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
  background-color: yellowgreen;
}

.el-table .success-row {
  background-color: cadetblue;
}
</style>
```

:::
