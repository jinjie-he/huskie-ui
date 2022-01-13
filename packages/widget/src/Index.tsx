import { defineComponent, h, PropType, onMounted, reactive, Fragment } from 'vue'
import { ElCol, ElFormItem, ElInput, ElSelect, ElOption } from 'element-plus'
export const FormCol = defineComponent({
    name: 'FormCol',
    props: {
        label: [Function, String],
        span: {
            type: Number,
            default: 6
        }
    },
    setup(props, { slots }) {
        const _slots = {
            label: () =>
                slots.label ? slots.label?.() : typeof props.label === 'string' ? props.label : props.label(),
            default: () => slots.default?.()
        }
        return () => <ElCol span={props.span}>{{ default: () => <ElFormItem>{_slots}</ElFormItem> }}</ElCol>
    }
})
export const FormInput = defineComponent({
    name: 'FormInput',
    props: {
        label: [String, Function],
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
                <ElInput
                    modelValue={props.modelValue}
                    {...attrs}
                    style={{ width: '100%' }}
                    onInput={value => emit('update:modelValue', value)}
                />
            )
        }
        return () => <FormCol>{_slots}</FormCol>
    }
})
export const FormSelect = defineComponent({
    name: 'FormSelect',
    props: {
        label: [String, Function],
        span: {
            type: Number,
            default: 6
        },
        modelValue: [String, Number, Object],
        request: {
            type: Function,
            default: () => {
                return new Promise(resolve => {
                    resolve({
                        data: []
                    })
                })
            }
        },
        dataSource: {
            type: Array as PropType<Array<any>>,
            default: () => []
        },
        fields: {
            type: Object,
            default: () => {
                return {
                    label: 'label',
                    value: 'value'
                }
            }
        }
    },
    emits: ['update:modelValue'],
    setup(props, { slots, emit, attrs }) {
        const _data = reactive<{
            dataSource: Array<any>
        }>({
            dataSource: []
        })
        onMounted(async () => {
            try {
                const { data = [] } = await props.request()
                _data.dataSource = data
            } catch (e) {
                console.log(e)
            }
        })
        const _slots = {
            label: () => (slots.label ? slots.label?.() : props.label),
            default: () => (
                <ElSelect
                    modelValue={props.modelValue}
                    {...attrs}
                    style={{ width: '100%' }}
                    onChange={value => emit('update:modelValue', value)}>
                    {{
                        default: () => (
                            <>
                                {(_data.dataSource.length > 0 ? _data.dataSource : props.dataSource).map(
                                    (item, index) => {
                                        return (
                                            <ElOption
                                                label={item[props.fields.label]}
                                                value={item[props.fields.value]}
                                                key={index}
                                            />
                                        )
                                    }
                                )}
                            </>
                        )
                    }}
                </ElSelect>
            )
        }
        return () => <FormCol>{_slots}</FormCol>
    }
})
