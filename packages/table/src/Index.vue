<template>
    <div class="h-table">
        <h-query-filter
            :columns="columns"
            :size="tableFields?.size ? tableFields.size : ''"
            @reset="onReset"
            @submit="onSubmit"
            :submitLoading="_data.loading"
        >
            <template #customSubmitBtn="{ formSearch }">
                <slot name="customSubmitBtn" :formSearch="formSearch" />
            </template>
        </h-query-filter>
        <div class="h-table-tb">
            <slot name="toolBar" />
        </div>
        <el-table
            ref="table"
            :data="_data.dataSource.length > 0 ? _data.dataSource : dataSource"
            v-loading="_data.loading"
            v-bind="tableFields"
            v-on="tableEvents"
        >
            <el-table-column
                v-for="(column, index) in columns"
                :label="column.title"
                :prop="column.dataIndex"
                :key="index"
                v-bind="column.columnFields || {}"
            >
                <template v-if="column.headerSort" #header="scope">
                    <slot :name="lowerToCapital(column.dataIndex)" :column="scope?.column" />
                </template>
                <template v-if="column.sortName" #default="{ row }">
                    <slot :name="column.sortName" :row="row" />
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            :style="{ textAlign: paginationFields.align }"
            class="h-table-pagination"
            :current-page="_data.currentPage"
            :page-size="_data.pageSize"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :hide-on-single-page="_data.total <= 0"
            :total="_data.total"
            :small="tableFields?.size === 'small' ? true : false"
            v-bind="_paginationFields"
        />
    </div>
</template>

<script lang="ts" setup>
import HQueryFilter from '@huskie-ui/queryFilter'
import { defineProps, onMounted, PropType, reactive, defineExpose, ref, computed } from 'vue'
import { ElTable, ElTableColumn, ElButton, ElPagination, ElForm, ElFormItem, ElLoading } from 'element-plus'
const vLoading = ElLoading.directive
interface Column {
    title?: string
    request?: () => Promise<any>
    dataIndex?: string
    valueType?: string
    search?: boolean
    headerSort?: boolean
    sortName?: string
    columnFields?: any
    fieldProps?: any
    options?: Array<any>
}
const table = ref<HTMLElement>(null)
const props = defineProps({
    dataSource: {
        type: Array,
        default: () => []
    },
    request: {
        type: Function,
        default: () => {
            return new Promise(resolve => {
                resolve({
                    data: [],
                    total: 0,
                    currentPage: 1,
                    pageSize: 10
                })
            })
        }
    },
    params: {
        type: Object,
        default: () => {
            return {}
        }
    },
    columns: {
        type: Array as PropType<Array<Column>>,
        default: () => []
    },
    tableFields: {
        type: Object,
        default: () => {
            return {}
        }
    },
    tableEvents: {
        type: Object,
        default: () => {
            return {}
        }
    },
    paginationFields: {
        type: Object,
        default: () => {
            return {
                layout: 'total, sizes, prev, pager, next, jumper',
                pageSizes: [10, 20, 30, 40, 50],
                background: true,
                align: 'center'
            }
        }
    }
})
const _paginationFields = computed(() => {
    const { align, ...other } = props.paginationFields
    return { ...other }
})
const _data = reactive<{
    dataSource: Array<any>
    total: number | string
    currentPage: number
    pageSize: number
    loading: boolean
}>({ dataSource: [], total: 0, currentPage: 1, pageSize: 10, loading: false })
onMounted(() => {
    getRequestData({ currentPage: 1, pageSize: 10 })
})
const getRequestData = async params => {
    _data.loading = true
    try {
        const { data, total, currentPage, pageSize } = await props.request(params)
        _data.dataSource = data
        _data.total = total || data.length
        _data.currentPage = currentPage || 1
        _data.pageSize = pageSize || 10
        _data.loading = false
    } catch (e) {
        _data.loading = false
        console.log(e)
    }
}
const lowerToCapital = (dataIndex: string): string => {
    return `header${dataIndex.toLowerCase().replace(/( |^)[a-z]/g, L => L.toUpperCase())}`
}
const handleSizeChange = pageSize => {
    getRequestData({ pageSize, currentPage: 1 })
}
const handleCurrentChange = currentPage => {
    getRequestData({ pageSize: _data.pageSize, currentPage })
}

const onReset = () => {
    getRequestData({ currentPage: 1, pageSize: 10 })
}
const onSubmit = formSearch => {
    getRequestData({ currentPage: 1, pageSize: _data.pageSize, ...formSearch })
}
defineExpose({
    tableRef: table
})
</script>
<style lang="scss">
.h-table {
    table {
        margin: 0;
    }
    th,
    td {
        border: none;
    }
    .el-checkbox {
        height: auto;
    }
}
</style>
<style lang="scss" scoped>
.h-table {
    &-tb {
        padding: 8px;
    }
    &-pagination {
        margin-top: 12px;
    }
}
</style>
