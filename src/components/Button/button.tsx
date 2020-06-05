import React from 'react'
import classNames from 'classnames'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

interface BaseButtonProps {
  className ?: string;
  disabled ?:boolean;
  size ?:ButtonSize;
  children: React.ReactNode;
  href ?: string,
  btnType?: ButtonType
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
// 联合类型返回a或者b的类型
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
// 交叉类型是将多个类型合并为一个类型
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
// Partial 泛型 修饰一下，属性变为可选

// 拿到了button所有的属性
const Button: React.FC <ButtonProps> = (props) => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
    // 这里是原生属性
  } = props
  //btn, btn-lg, btn-primary
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabed': (btnType === ButtonType.Link) && disabled
  })
  if (btnType === ButtonType.Link && href) {
    return (
      <a
        className = {classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    ) 
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}

      >
        {children}
      </button>
    )
  }
  
} 
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
}
export default Button
// 手动拼接CLassName太麻烦了 就可以用 className包
