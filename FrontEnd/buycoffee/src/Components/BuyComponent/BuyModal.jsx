import "./buyModal.css";
import React, { useState } from "react";
import { BuyMeCoffeeInstance } from "../../Contract/Instance";
import { parseEther } from "ethers/lib/utils";
import { ethers } from "ethers";

const BuyModal = (props) => {
  const initialValues = { name: "", Message: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const contract = await BuyMeCoffeeInstance();
      const txn = await contract.buyCoffee(
        formValues.name,
        formValues.Message,
        { value: ethers.utils.parseEther("0.0025") }
      );
      await txn.wait();
      props.setOpenModal(false);
      props.setHasBuyed(true);
      formValues.name = "";
      formValues.Message = "";
    } catch (err) {
      console.log(err);
      alert(`Transaction failed due to ${err.code}`);
    }
  };

  return (
    <>
      <div
        onClick={() => props.setOpenModal(false)}
        className="modalWrapper"
      ></div>
      <div className="modalCont">
        <div className="headCont">
          <span className="headText">Pay for Coffee</span>
          <span className="error"></span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="formCont">
            <div className="inputSec">
              <input
                required
                name="name"
                placeholder="Name"
                className="nameIn"
                value={formValues.name}
                onChange={handleChange}
              />
              <input
                required
                name="Message"
                placeholder="Message"
                className="nameIn"
                value={formValues.Message}
                onChange={handleChange}
              />
            </div>
            <button className="submitBtn">Pass the cup</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BuyModal;
