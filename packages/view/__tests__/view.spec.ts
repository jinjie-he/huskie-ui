import { mount } from '@vue/test-utils'
import SumView from '@sum-ui/view'

describe('@sum-ui/view', () => {
    it('create', () => {
        const wrapper = mount(SumView)
        expect(wrapper.classes()).toContain('sum-view')
    })
})
