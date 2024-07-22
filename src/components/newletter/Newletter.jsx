import React from 'react'
import { Send } from '@mui/icons-material'
import './newletter.css'
const Newletter = () => {
  return (
    <div className="newsletter">
      <h1 className="newsTitle">한국유통</h1>
      <div className="newsDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      <div className="newsSearchWrapper">
        <input type="text" className='newsInput' />
        <button className="newsBtn">
          <Send/>
        </button>
      </div>
    </div>
  )
}

export default Newletter