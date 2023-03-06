import React, { useState, useEffect } from "react";
import "./HeroPage.css";
import Coffee from "./coffee.jpg";
import BuyModal from "../Components/BuyComponent/BuyModal";
import List from "../Components/ListComponent/List";
import { BuyMeCoffeeInstance } from "../Contract/Instance";

const HeroPage = (props) => {
  const { address, setAddress } = props;
  const [label, setLabel] = useState("Connect");
  const [openModal, setOpenModal] = useState(false);
  const [hasBuyed, setHasBuyed] = useState(false);
  const [msgList, setMsgList] = useState([]);

  async function handleConnect() {
    if (label === "Connect") {
      if (window.ethereum) {
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAddress(account[0]);
        setLabel("Disconnect");
      } else {
        console.log("no wallet");
      }
    } else {
      setAddress("");
      setLabel("Connect");
    }
  }

  const isDisabled = () => {
    if (address === null || address === "") {
      return true;
    } else {
      return false;
    }
  };

  function onOpen() {
    setOpenModal(!openModal);
    console.log(process.env.REACT_APP_BUY_ME_COFFEE_CONTRACT_ADDRESS);
  }

  useEffect(() => {
    async function fetchList() {
      try {
        const contract = await BuyMeCoffeeInstance();
        const list = await contract.getMsges();
        setMsgList(list);
        console.log("fetched msg list succesfully");
      } catch (err) {
        console.log("not fetching list", err);
      }
    }
    fetchList();
  }, [hasBuyed]);

  return (
    <div>
      <div className="heroCont">
        <div className="leftSec">
          <div className="heroTitle">
            <span className="titleText">Buy Me A Coffee</span>
            <span className="titleText">Get a Token Of</span>
            <span className="titleText">Friendship</span>
          </div>
          <div className="buttonSec">
            <button onClick={() => handleConnect()} className="connectBtn">
              {label}
            </button>
            {isDisabled() ? (
              <button disabled className="connectBtn">
                Buy A coffee
              </button>
            ) : (
              <button onClick={() => onOpen()} className="connectBtn">
                Buy A coffee
              </button>
            )}
          </div>
        </div>
        <div className="rightSec">
          <div className="imageDiv">
            <img src={Coffee} alt="himg" />
          </div>
          <div className="listDiv">
            <List address={address} list={msgList} />
          </div>
        </div>
      </div>
      {openModal && (
        <BuyModal setHasBuyed={setHasBuyed} setOpenModal={setOpenModal} />
      )}
    </div>
  );
};

export default HeroPage;
