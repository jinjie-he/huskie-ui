import { mount } from '@vue/test-utils'
import HuskieLayout from '@huskie-ui/layout'

describe('@huskie-ui/layout', () => {
    it('create', () => {
        const wrapper = mount(HuskieLayout)
        expect(wrapper.classes()).toContain('huskie-layout')
    })
})
