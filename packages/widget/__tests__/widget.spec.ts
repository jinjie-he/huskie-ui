import { mount } from '@vue/test-utils'
import HWidget from '@huskie-ui/widget'

describe('@huskie-ui/widget', () => {
  it('create', () => {
    const wrapper = mount(HWidget)
    expect(wrapper.classes()).toContain('h-widget')
  })
})
