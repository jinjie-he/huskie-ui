---
title: 开始
---
## 安装

```bash
npm i @huskie-ui/layout
# or
yarn add @huskie-ui/layout

npm i @huskie-ui/table
# or
yarn add @huskie-ui/table
```

## 使用

```vue
<template>
 <huskie-layout>
 </huskie-layout>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import HuskieLayout from '@huskie-ui/layout'


export default defineComponent({
  name: 'huskie-layout',
  components: { HuskieLayout },
  setup() {}
})
</script>
```
