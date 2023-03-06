import React from "react";
import "./ListIItem.css";
import formatAddress from "../../utils/formatAddress";

const ListItem = (props) => {
  const { name, msg, address } = props;
  return (
    <div className="itemCont">
      <div className="identity">
        <div className="inId">
          <span>From </span>
          <p className="nameP">{name}</p>
        </div>
        <span> at {formatAddress(address)}</span>
      </div>
      <div className="msg">
        <div className="inId">
          <p className="nameP">{name}</p>
          <span> Says :-</span>
        </div>
        <span>{msg}</span>
      </div>
    </div>
  );
};

export default ListItem;
