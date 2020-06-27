// 导入的包和模块 
// createContext 解决父组件传值给子组件，多层级传值的问题
import React, { useState, createContext } from 'react'
import classNames from 'classnames';
type SelectCallback = (selectedIndex: number) => void
// props约束传入的参数
type MenuMode = 'horizontal' | 'verical'
export interface ManuProps {
  defaultIndex?: number,
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback
}

interface IMenuContext {
  index: number;
  onSelect?: SelectCallback
}

export const MenuContext = createContext<IMenuContext>({index: 0})
// 函数式组件
const Menu: React.FC<ManuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect} = props
  const [ currentActive, setActive ] = useState(defaultIndex)
  // 解构传入的值
  const classes = classNames('stone-menu', className, {
    'menu-vertical': mode === 'verical'
  }) 
  // 对逻辑进行处理
  const handleClick = (index: number) => {
    setActive(index)
    // 传值
    if (onSelect) {
      // 有onSelect就调用onSelect
      onSelect(index)
    }
  }
  // 一个是高亮，一个是回调函数
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0, 
    onSelect: handleClick
  }
  // 模板代码
  return (
    <ul className = {classes} style = {style}>
      <MenuContext.Provider value={passedContext}>
        {/* 把context注入到provider */}
        {children}
      </MenuContext.Provider>
    </ul>
  )
}

// 默认值
Menu.defaultProps ={
  defaultIndex: 0,
  mode: 'horizontal'  
}

// 导出代码
export default Menu