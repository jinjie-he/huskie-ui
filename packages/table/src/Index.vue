<template>
    <div class="huskie-table">
        <el-button @click="onTest">test</el-button>
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
    </div>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, PropType, reactive, defineExpose, ref, toRefs } from 'vue'
import { ElTable, ElTableColumn, ElButton } from 'element-plus'
interface Column {
    title?: string
    request?: () => Promise
    dataIndex: string
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
                    total: 0
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
    }
})
const _data = reactive<{
    dataSource: Array
    total: number | string
}>({ dataSource: [], total: 0 })
onMounted(() => {
    getRequestData()
})
const getRequestData = async () => {
    try {
        const { data, total } = await props.request()
        console.log(data, total)
        _data.dataSource = data
        _data.total = total
    } catch (e) {
        console.log(e)
    }
}
const lowerToCapital = (dataIndex: string): string => {
    return `header${dataIndex.toLowerCase().replace(/( |^)[a-z]/g, L => L.toUpperCase())}`
}
const onTest = () => {
    console.log(table)
}
defineExpose({
    tableRef: table
})
</script>
<style lang="scss">
.huskie-table {
    table {
        margin: 0;
    }
    th,
    td {
        border: none;
    }
}
</style>
