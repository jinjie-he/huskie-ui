<template>
    <el-form class="qf" ref="qf" :model="formSearch" :size="size" :label-width="100">
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
                :prop="column.dataIndex"
                v-bind="column.fieldProps"
            />
            <slot v-if="customSubmitBtn" name="customSubmitBtn" :formSearch="formSearch" />
            <el-col v-else :span="6" class="qf-btn-right" :class="{ 'qf-btn-small': size === 'small' }">
                <el-button @click="onReset">重置</el-button>
                <el-button @click="onSubmit" type="primary" :loading="submitLoading">查询</el-button>
            </el-col>
        </el-row>
    </el-form>
</template>

<script lang="ts" setup>
import { defineProps, PropType, reactive, computed, ref, defineEmits } from 'vue'
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
const emit = defineEmits(['reset', 'submit'])
const formSearch = reactive({})
const qf = ref<HTMLElement>(null)
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
    },
    submitLoading: {
        type: Boolean,
        default: false
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
const onReset = () => {
    qf.value?.resetFields()
    emit('reset')
}
const onSubmit = () => {
    qf.value.validate(valid => {
        if (valid) {
            emit('submit', formSearch)
        }
    })
}
</script>
<style lang="scss" scoped>
.qf {
    &-btn-small {
        margin-top: -1px;
    }
    &-btn-right {
        text-align: right;
        min-width: 132px;
    }
}
</style>
