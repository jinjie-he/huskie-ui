import { defineComponent, h } from 'vue'
import { ElCol, ElFormItem, ElInput, ElSelect } from 'element-plus'
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
        const _slots = {
            label: () => (slots.label ? slots.label?.() : props.label),
            default: () => (
                <ElInput modelValue={props.modelValue} {...attrs} onInput={value => emit('update:modelValue', value)} />
            )
        }
        return () => <FormCol>{_slots}</FormCol>
    }
})
export const FormSelect = defineComponent({
    name: 'FormSelect',
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
        },
        request: {
            type: Function,
            default: () => {
                return new Promise(resolve => {
                    resolve({
                        data: []
                    })
                })
            }
        }
    },
    emits: ['update:modelValue'],
    setup(props, { slots, emit, attrs }) {
        const _slots = {
            label: () => (slots.label ? slots.label?.() : props.label),
            default: () => (
                <ElSelect
                    modelValue={props.modelValue}
                    {...attrs}
                    onChange={value => emit('update:modelValue', value)}
                />
            )
        }
        return () => <FormCol>{_slots}</FormCol>
    }
})
