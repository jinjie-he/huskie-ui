import { mount } from '@vue/test-utils'
import HLayout from '@huskie-ui/layout'

describe('@huskie-ui/layout', () => {
    it('create', () => {
        const wrapper = mount(HLayout)
        expect(wrapper.classes()).toContain('h-layout')
    })
})
