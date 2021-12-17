<template>
    <div class="huskie-layout">
        我是测试代码
        <p>{{ formData.mobile }}</p>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, reactive } from 'vue'

defineProps({})
const formData = reactive({
    account: '',
    mobile: '17714554930',
    sms: ''
})
</script>
