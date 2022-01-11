import { defineComponent, h, computed } from 'vue'
import { ElCol, ElFormItem, ElInput } from 'element-plus'
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
            <ElCol span={props.span}>{{ default: () => <ElFormItem label={props.label}>{_slots}</ElFormItem> }}</ElCol>
        )
    }
})
export const FormInput = defineComponent({
    name: 'FormInput',
    props: {
        label: {
            type: String,
            default: ''
        },
        span: {
            type: Number,
            default: 6
        },
        modelValue: {
            type: String,
            default: ''
        }
    },
    emits: ['update:modelValue'],
    setup(props, { slots, emit, attrs }) {
        const _value = computed({
            get() {
                return props.modelValue
            },
            set(newValue) {
                console.log(newValue)
                emit('update:modelValue', newValue)
            }
        })
        console.log(attrs, _value.value)
        const _slots = {
            label: () => (slots.label ? slots.label?.() : props.label),
            default: () => <ElInput v-model={_value.value} {...attrs} />
        }
        return () => h(<FormCol>{_slots}</FormCol>)
    }
})
