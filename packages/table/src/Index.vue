<template>
    <div class="h-table">
        <el-form :inline="true" :model="formSearch" size="mini" :label-width="100">
            <FormInput label="Approved by" v-model="formSearch.user" placeholder="Activity zone" />
            <!--            <form-col label="label">-->
            <!--                <el-select v-model="formSearch.region" placeholder="Activity zone" style="width: 100%">-->
            <!--                    <el-option label="Zone one" value="shanghai"></el-option>-->
            <!--                    <el-option label="Zone two" value="beijing"></el-option>-->
            <!--                </el-select>-->
            <!--            </form-col>-->
            <el-form-item label="Zone">
                <el-select v-model="formSearch.region" placeholder="Activity zone" style="width: 100%">
                    <el-option label="Zone one" value="shanghai"></el-option>
                    <el-option label="Zone two" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onTest">Query</el-button>
            </el-form-item>
        </el-form>
        <el-table
            ref="table"
            :data="_data.dataSource.length > 0 ? _data.dataSource : dataSource"
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
            class="huskie-table-pagination"
            :current-page="_data.currentPage"
            :page-size="_data.pageSize"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :hide-on-single-page="_data.total <= 0"
            :total="_data.total"
            v-bind="_paginationFields"
        />
    </div>
</template>

<script lang="ts" setup>
import { FormCol, FormInput } from '@huskie-ui/widget'
import { defineProps, onMounted, PropType, reactive, defineExpose, ref, computed } from 'vue'
import {
    ElTable,
    ElTableColumn,
    ElButton,
    ElPagination,
    ElForm,
    ElFormItem,
    ElInput,
    ElSelect,
    ElOption
} from 'element-plus'
interface Column {
    title?: string
    request?: () => Promise<any>
    dataIndex?: string
    valueType?: string
    search?: boolean
    headerSort?: boolean
    sortName?: string
    columnFields?: any
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
        default: () => {
            return {}
        }
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
    dataSource: Array
    total: number | string
    currentPage: number
    pageSize: number
}>({ dataSource: [], total: 0, currentPage: 1, pageSize: 10 })
const formSearch = reactive({ user: '1111' })
onMounted(() => {
    getRequestData({ currentPage: 1, pageSize: 10 })
})
const getRequestData = async params => {
    try {
        const { data, total, currentPage, pageSize } = await props.request(params)
        _data.dataSource = data
        _data.total = total || data.length
        _data.currentPage = currentPage || 1
        _data.pageSize = pageSize || 10
    } catch (e) {
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
const onTest = () => {
    console.log(formSearch)
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
.h-table-pagination {
    margin-top: 12px;
}
</style>
