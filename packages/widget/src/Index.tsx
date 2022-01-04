import { defineComponent, reactive, defineProps } from 'vue'
import { ElCol, ElFormItem } from 'element-plus'
export const FormCol = defineComponent({
    name: 'FormCol',
    setup({}, { slots }) {
        const props = defineProps({
            label: {
                type: String,
                default: ''
            },
            span: {
                type: Number,
                default: 6
            }
        })
        return () => (
            <ElCol span={props.span}>
                <ElFormItem label={props.label}>
                    {slots.default?.()}
                    <span>dsdsds</span>
                </ElFormItem>
            </ElCol>
        )
    }
})
