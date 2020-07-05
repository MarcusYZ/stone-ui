import React from 'react'
import  {render, RenderResult} from '@testing-library/react'

import Menu, {MenuProps} from './menu'
import MenuItem from './menuItem';

const testProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test'
}
const testVerProps: MenuProps = {
  defaultIndex: 0,
  mode: "vertical"
}
const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem index={0}>
        active
      </MenuItem>
      <MenuItem disabled index={1}>
        disabled
      </MenuItem>
      <MenuItem index={2}>
        xyz
      </MenuItem>
    </Menu>
  )
}

let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement
describe('test menuItem component', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps))
    menuElement = wrapper.getByTestId('test-menu')
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')
  })
  // 每个case开始前都会跑的通用函数

  // 案例越贴近使用者的使用方法 就越能给人信心。 所以api会渲染元素内能取得节点 
  it('should render correct Menu and MenuItem on default props', ()=> {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('stone-menu test')
    expect(menuElement.getElementsByTagName('li').length).toEqual(3)
    expect(activeElement).toHaveClass('menu-item is-active')
    expect(disabledElement).toHaveClass('menu-item is-disabled')
  })
  it('click item should change active and call the right callback', ()=> {

  })
  it('should render vertical mode ', () => {

  })
});