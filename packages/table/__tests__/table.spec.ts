import { mount } from '@vue/test-utils'
import HuskieTable from '@huskie-ui/table'

describe('@huskie-ui/table', () => {
  it('create', () => {
    const wrapper = mount(HuskieTable)
    expect(wrapper.classes()).toContain('huskie-table')
  })
})
