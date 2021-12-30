import { mount } from '@vue/test-utils'
import HQueryFilter from '@huskie-ui/queryFilter'

describe('@huskie-ui/queryFilter', () => {
  it('create', () => {
    const wrapper = mount(HQueryFilter)
    expect(wrapper.classes()).toContain('h-queryFilter')
  })
})
