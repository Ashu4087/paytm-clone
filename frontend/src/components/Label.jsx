import React from 'react'

export default function Label({text, htmlFor}) {
  return (
    <div>
        <label htmlFor={htmlFor}>{text}</label>  
    </div>
  )
}
