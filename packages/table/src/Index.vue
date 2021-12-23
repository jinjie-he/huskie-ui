<template>
    <div class="huskie-table">
        <el-table :data="_data.data.length > 0 ? _data.data : dataSource">
            <el-table-column
                v-for="(column, index) in columns"
                :title="column.title"
                :prop="column.dataIndex"
                :key="index"
            />
        </el-table>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, PropType, reactive } from 'vue'
import { ElTable, ElTableColumn } from 'element-plus'
interface Column {
    title?: string
    request?: () => Promise
    dataIndex: string
    search?: boolean
}
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
    }
})
const _data = reactive<{
    data: Array<never>
}>({ data: [] })
onMounted(() => {
    getRequestData()
})
const getRequestData = async () => {
    try {
        const { data, total } = await props.request()
        console.log(data, total, _data)
        _data.data = data
    } catch (e) {
        console.log(e)
    }
}
</script>
