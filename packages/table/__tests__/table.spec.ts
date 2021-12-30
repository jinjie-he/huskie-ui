import { mount } from '@vue/test-utils'
import HTable from '@huskie-ui/table'

describe('@huskie-ui/table', () => {
    it('create', () => {
        const wrapper = mount(HTable)
        expect(wrapper.classes()).toContain('h-table')
    })
})
