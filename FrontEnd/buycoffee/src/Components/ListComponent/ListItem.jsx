import React from 'react'
import './ListIItem.css'

const ListItem = () => {
  return (
    <div className='itemCont'>
      <div className='identity'>
        <div className='inId'>
          <span>From </span>
          <p className='nameP'>name</p>
        </div>
        <span> at 0x89h..8j6</span>
      </div>
      <div className='msg'>
        <div className='inId'>
          <p className='nameP'>name</p>
          <span> Says :-</span>
        </div>
        <span>Enjoy Coffee rushi</span>
      </div>
    </div>
  )
}

export default ListItem