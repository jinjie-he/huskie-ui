import { defineComponent, reactive, onMounted } from 'vue'
import { ElCol, ElFormItem } from 'element-plus'
export const FormCol = defineComponent({
    name: 'FormCol',
    setup() {
        return () => (
            <ElCol span={8}>
                <ElFormItem label={'test'}>
                    <span>dsdsds</span>
                </ElFormItem>
            </ElCol>
        )
    }
})
