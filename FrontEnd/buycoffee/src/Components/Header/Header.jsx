import React from 'react'
import './Header.css'
import Logo from './LogoCoffee.svg'
import formatAddress from '../../utils/formatAddress'

const Header = (props) => {
  
  return (
    <div>
      <nav className='navClass'>
        <div className='nameContainer'>
          <img className='logo' src={Logo} alt="AppLogo"/>
          <h2>Buy Me A Coffee</h2>
        </div>
        <div className='filler'></div>
        <div className='addressDiv'>
          <h4>Your Address : {formatAddress(props.address)}</h4>
          <p>ETH Balance : 100</p>
        </div>
      </nav>
    </div>
  )
}

export default Header