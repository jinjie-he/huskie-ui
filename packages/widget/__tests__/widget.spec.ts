import { mount } from '@vue/test-utils'
import { FormCol, FormInput, FormSelect } from '@huskie-ui/widget'

describe('@huskie-ui/widget', () => {
    it('create', () => {
        const wrapper = mount(FormCol)
        expect(wrapper.classes()).toContain('form-col')
    })
    it('create', () => {
        const wrapper = mount(FormInput)
        expect(wrapper.classes()).toContain('form-input')
    })
    it('create', () => {
        const wrapper = mount(FormSelect)
        expect(wrapper.classes()).toContain('form-select')
    })
})
