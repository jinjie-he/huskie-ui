---
title: 'Layout'
desc: 'desc'
---

### @huskie-ui/table

::: demo

```vue
<template>
   <huskie-table :request="getTableData">

   </huskie-table>
</template>
<script lang="ts" setup>
const getTableData = () => {
 return  new Promise(resolve => {
       resolve({
         data:[{
             name:'junjie',
             age:'24',
             sex:'男'
         }],
         total:1
       })
   })
}
</script>
```

:::
