import React,{useState} from 'react'
import './HeroPage.css'
import Coffee from './coffee.jpg';
import ListItem from '../Components/ListComponent/ListItem';
import {buyACoffee} from  '../Contract/ContractFunctions'
import BuyModal from '../Components/BuyComponent/BuyModal';

const HeroPage = (props) => {

  const{address, setAddress} = props
  const [label, setLabel] = useState("Connect")
  const [openModal, setOpenModal] = useState(false)
  const [hasBuyed, setHasBuyed] = useState(false);

  async function handleConnect(){

    if(label === "Connect"){
      if(window.ethereum){
        const account = await window.ethereum.request({
          method:"eth_requestAccounts",
        });
        setAddress(account[0]);
        setLabel("Disconnect")
      }else{
        console.log("no wallet")
      }
    }else{
      setAddress("")
      setLabel("Connect")
    }
  }

  const isDisabled = () => {
    if(address === null || address === ""){
      return true;
    }else{
      return false;
    }
  }

  function onOpen(){
    setOpenModal(!openModal);
    console.log(process.env.REACT_APP_BUY_ME_COFFEE_CONTRACT_ADDRESS)
  }


  return (
    <div>
      <div className='heroCont'>
        <div className='leftSec'>
          <div className='heroTitle'>
            <span className='titleText'>Buy Me A Coffee</span>
            <span className='titleText'>Get a Token Of</span>
            <span className='titleText'>Friendship</span>
          </div>
          <div className='buttonSec'>
            <button onClick={() => handleConnect()}className='connectBtn'>{label}</button>
            {
              isDisabled() ? <button disabled className='connectBtn'>Buy A coffee</button> 
              :
              <button onClick={() => onOpen()} className='connectBtn'>Buy A coffee</button>
            }
          </div>
        </div>
        <div className='rightSec'>
          <div className='imageDiv'>
            <img src={Coffee} alt="himg"/>
          </div>
          <div className='listDiv'>
            <ListItem/>
          </div>
        </div>
      </div>
      {
        openModal && <BuyModal setHasBuyed = {setHasBuyed} setOpenModal ={setOpenModal}/>
      }
    </div>
  )
}

export default HeroPage