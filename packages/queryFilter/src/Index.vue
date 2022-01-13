<template>
    <el-form class="qf" :model="formSearch" size="mini" :label-width="100">
        <el-row>
            <!-- eslint-disable-next-line vue/require-component-is -->
            <component is="FormInput" label="Ass sd" v-model="formSearch.user" placeholder="Activity zone" />
            <form-input label="Ass sd" v-model="formSearch.user" placeholder="Activity zone" />
            <form-select label="Zone one" v-model="formSearch.test" placeholder="Activity test" :request="getRequest" />
            <form-col label=""> sdsdsd </form-col>
        </el-row>
    </el-form>
</template>

<script lang="ts" setup>
import { defineProps, PropType, reactive } from 'vue'
import { FormInput, FormSelect, FormCol } from '@huskie-ui/widget'
import { ElForm, ElRow } from 'element-plus'
interface Column {
    title?: string
    request?: () => Promise<any>
    dataIndex?: string
    valueType?: string
    search?: boolean
    headerSort?: boolean
    sortName?: string
    fieldProps?: any
}
const formSearch = reactive({})
defineProps({
    columns: {
        type: Array as PropType<Array<Column>>,
        default: () => []
    }
})
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
</script>
<style lang="scss" scoped>
.qf {
}
</style>
