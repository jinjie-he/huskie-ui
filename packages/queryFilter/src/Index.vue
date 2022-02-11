<template>
    <el-form class="qf" :model="formSearch" :size="size" :label-width="100">
        <el-row>
            <component
                v-for="column in searchColumn"
                :key="column.dataIndex"
                :is="column.valueType"
                :label="column.title"
                v-model="formSearch[column.dataIndex]"
                :placeholder="column.title"
                :dataSource="column?.options ? column.options : []"
                :request="column?.request ? column.request : null"
                v-bind="column.fieldProps"
            />
            <slot v-if="customSubmitBtn" name="customSubmitBtn" :formSearch="formSearch" />
            <el-col v-else :span="6">
                <el-button>重置</el-button>
                <el-button type="primary">查询</el-button>
            </el-col>
        </el-row>
    </el-form>
</template>

<script lang="ts" setup>
import { defineProps, PropType, reactive, computed } from 'vue'
import { FormInput, FormSelect, FormCol } from '@huskie-ui/widget'
import { ElForm, ElRow, ElButton, ElCol } from 'element-plus'
interface Column {
    title?: string
    request?: () => Promise<any>
    dataIndex?: string
    valueType?: string
    search?: boolean
    fieldProps?: any
    options?: Array<any>
}
const formSearch = reactive({})
const props = defineProps({
    columns: {
        type: Array as PropType<Array<Column>>,
        default: () => []
    },
    customSubmitBtn: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: 'default'
    }
})
const lowerToCapital = (valueType: string): string => {
    if (valueType) {
        return `Form${valueType.toLowerCase().replace(/( |^)[a-z]/g, L => L.toUpperCase())}`
    } else {
        return 'FormInput'
    }
}
const searchColumn = computed(() => {
    return props.columns
        .filter(i => i.search)
        .map(column => {
            const valueType = lowerToCapital(column?.valueType)
            return { ...column, valueType }
        })
})
</script>
<style lang="scss" scoped>
.qf {
}
</style>
