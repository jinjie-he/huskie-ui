import { mount } from '@vue/test-utils'
import { FormCol } from '@huskie-ui/widget'

describe('@huskie-ui/widget', () => {
    it('create', () => {
        const wrapper = mount(FormCol)
        expect(wrapper.classes()).toContain('form-col')
    })
})
