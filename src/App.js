import React, { useState } from "react";
import "./App.css";
import UserInfo from "./component/UserInfo/UserInfo";
import UserItem from "./component/UserInfo/UserItem";

const App = () => {
  const [userAges, setUserAge] = useState([]);
  const AllDetails = (data) => {
    setUserAge((prevData) => {
      return [data, ...prevData];
    });
  };
  return (
    <div className="app">
      <UserInfo onClickHandler={AllDetails} />
      {userAges.map((userAge) => {
        return <UserItem items={userAge} key={userAge.id} />;
      })}
    </div>
  );
};

export default App;
