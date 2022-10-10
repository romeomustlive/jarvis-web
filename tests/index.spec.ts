import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import index from '../src/pages/index.vue'

describe('index.vue', () => {
  it('should render hello', () => {
    const wrapper = mount(index)

    expect(wrapper.text()).toContain('Hello')
  })
})
