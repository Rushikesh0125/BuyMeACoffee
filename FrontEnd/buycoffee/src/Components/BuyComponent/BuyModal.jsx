import "./buyModal.css"
import React, {useState} from 'react'
import buyACoffee from '../../Contract/ContractFunctions'

const BuyModal = (props) => {

  const initialValues = {name: "", Message:""}
  const[formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({...formValues, [name] : value});
  }

  const handleSubmit = async() => {
   props.setOpenModal(false);
  }

  return (
    <>
      <div className="modalWrapper"></div>
      <div className="modalCont">
        <div className="headCont">
          <span className="headText">
            Pay for Coffee 
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="formCont">
            <div className="inputSec">
              <input required name="name" placeholder="Name" className="nameIn" value={formValues.name} onChange={handleChange}/>
              <input required name="Message" placeholder="Message" className="nameIn" value={formValues.Message} onChange={handleChange}/>
            </div>
            <button className="submitBtn">Pass the cup</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default BuyModal