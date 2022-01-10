import { defineComponent, h } from 'vue'
import { ElCol, ElFormItem } from 'element-plus'
export const FormCol = defineComponent({
    name: 'FormCol',
    props: {
        label: {
            type: String,
            default: ''
        },
        span: {
            type: Number,
            default: 6
        }
    },
    setup(props, { slots }) {
        const _slots = {
            label: () => (slots.label ? slots.label?.() : props.label),
            default: () => slots.default?.()
        }
        return () => (
            <ElCol span={props.span}>
                <ElFormItem label={props.label}>{_slots}</ElFormItem>
            </ElCol>
        )
    }
})
