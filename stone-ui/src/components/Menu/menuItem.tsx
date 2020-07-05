import React, { useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
export interface MenuIntemProps {
  index: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuIntemProps> = (props) => {
  const { index, disabled, className, style, children} = props
  const context = useContext(MenuContext)
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled, // 禁用
    'is-active': context.index === index  // 相等的时候就高亮
  })
  const handleClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(index)
    }
  }

  return (
    <li className = {classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
} 

export default MenuItem