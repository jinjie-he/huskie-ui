---
title: 'Layout'
desc: 'desc'
---

### @huskie-ui/table

::: demo

```vue

<template>
  <huskie-table
    ref="table"
    :request='getTableData'
    :columns='columns'
    :tableFields='tableFields'
    :tableEvents='tableEvents'>
    <template #headerOption='{ column }'>
      {{column.label}}
    </template>
    <template #option='{ row }'>
      <div>
        <a  @click='getTable'>删除</a>
        <a  @click='onOption(row)'>添加</a>
      </div>
    </template>
  </huskie-table>
</template>
<script lang='ts' setup>
import {ref} from 'vue'
const table = ref<HTMLElement>(null)
const getTableData = () => {
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
const getTable = () =>{
  table.value.tableRef?.toggleAllSelection()
}
const selectionChange = (val) => {
  console.log([...val])
}
const columns = [{ columnFields: { type: 'selection', width: 55 } }, { title: '姓名', dataIndex: 'name' }, {
  title: '年龄',
  dataIndex: 'age'
}, { title: '性别', dataIndex: 'sex' }, { title: '操作', dataIndex: 'option', sortName: 'option', headerSort: true }]
const tableFields = {
  size: 'mini',
  border: true,
  rowClassName,
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
