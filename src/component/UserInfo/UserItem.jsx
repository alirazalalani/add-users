import React from "react";
import "./UserItem.css";
const UserItem = (props) => {
  return (
    <div className="showAllItems">
      <h3 className="Items">{`${props.items.username}(${props.items.age}years old)`}</h3>
    </div>
  );
};

export default UserItem;
