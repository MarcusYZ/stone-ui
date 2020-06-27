import React from 'react'
import { render } from '@testing-library/react'
import Button from './button'

// 最外层在组件做分类
describe('test Button componentys', ()=> {
  it('should render the corrent default button', () => {
    const wrapper = render(<Button>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    // 在文档中
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
  })
  it ('should render the corrent component based on different porps', () => {

  })
  it ('should render a link when btnType equals link and href is provided', () => {

  })
  // 写长一点描述便于自己和他人看懂用例
})