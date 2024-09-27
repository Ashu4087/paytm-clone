import React from 'react'

export default function SubmitBtn({text, handleSubmit}) {
  return (
    <div className='handleBtn'>
        <button onClick={handleSubmit}>{text}</button>
      
    </div>
  )
}
