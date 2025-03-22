import React from 'react'

const InputBox = ({
  label,
  type="text",
  ref,
  value, 
  onChange,
  classname = "",
  placeholder,
  ...props

}) => {
 

  return (
    <div>
      {
        label && <label className='block mb-1 htmlFor={props.id'></label>}
        <input 
        ref={ref}
        type="text" 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} 
        className={`${classname}`}
        />
      
    </div>
  )
}

export default InputBox
