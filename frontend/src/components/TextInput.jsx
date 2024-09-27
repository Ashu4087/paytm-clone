import React from 'react'

export default function TextInput({type, id, placeholder, value, handleChange}) {
  return (
    <div className='textInput'>
      <input type={type? type : "text"} id={id} placeholder={placeholder? placeholder :""} value={value?value : ""} onChange={handleChange}/>
    </div>
  )
}
