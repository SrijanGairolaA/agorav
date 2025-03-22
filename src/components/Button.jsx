import React from 'react'

const Button = ({
    children,
    type = 'button',
    textColor = "text-white",
    bgColor = 'bg-rose-600',
    classname = '',
    ref,
    ...props


}) => {
  return (
    <button className={`px-5 p-2  ${bgColor} ${textColor}  ${classname}`}
    ref={ref} {...props}
    >
        {children}
    </button>
  )
}

export default Button
