<template>
    <div class="huskie-layout">
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple">efse</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">sfsdf</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">sfsd</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">sfsd</div></el-col>
        </el-row>
        我是测试代码
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
        <el-button>sdsdd</el-button>
        <p :class="test.text">{{ formData.mobile }}</p>
        <p :class="test.word">{{ formData.account }}</p>
        <div v-html="content"></div>
    </div>
</template>

<script lang="ts" setup>
import { ElRow, ElCol, ElButton, ElRadio } from 'element-plus'
import { defineProps, reactive, useCssModule, useAttrs, defineEmits } from 'vue'

defineProps({
    uid: [Number, String],
    title: {
        type: String,
        required: false,
        default: ''
    },
    user: {
        type: String,
        validator: v => v.length >= 3
    }
})
defineEmits(['change'])
const attrs = useAttrs()
console.log(attrs)
const formData = reactive({
    account: '',
    mobile: '17714554930',
    sms: ''
})
formData.account = '干锅少年'
const style = useCssModule('test')
console.log(style)
const content = `<div class='${style.word}'>我是v-html插入数据</div>`
</script>
<style module="test" lang="scss">
.word {
    color: #ff0000;
}
.text {
    font-size: 18px;
}
/*深度操作符
*/
.parent :deep(.child) {
    color: #cccccc;
}
.parent {
    :deep(.child) {
        font-size: 24px;
    }
}
</style>
