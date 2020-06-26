import React from 'react'
import { render } from '@testing-library/react'
import Button from './button'

test('case', () => {
  const wrapper = render(<Button>Nice</Button>)
  // 取得一个wrapper对象
  const element = wrapper.queryByText('Nice')
  // 在对象里找Nice节点
  expect(element).toBeTruthy() 
  // 希望这个值是true 
})