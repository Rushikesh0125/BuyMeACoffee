import React from "react";
import ListItem from "./ListItem";

import { useEffect } from "react";

const List = (props) => {
  const { address, list } = props;

  return (
    <div className="listCont">
      <div className="innerCont">
        {list.length === 0 ? (
          <ListItem
            name="you"
            address={props.address}
            msg="baught myself a coffee"
          />
        ) : (
          list.map((item) => (
            <ListItem name={item.name} address={item.from} msg={item.msg} />
          ))
        )}
      </div>
    </div>
  );
};

export default List;
