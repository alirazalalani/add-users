import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import "./UserInfo.css";
const UserInfo = (props) => {
  const [usernames, setUserName] = useState("");
  const [ages, setAge] = useState("");
  const [error, setError] = useState();
  const changeUserName = (e) => {
    setUserName(e.target.value);
  };
  const changeUserAge = (e) => {
    setAge(e.target.value);
  };

  const addUsers = (e) => {
    e.preventDefault();
    if (usernames.trim().length === 0 || ages.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+ages < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }
    const allValues = {
      username: usernames,
      age: ages,
      id: Math.random().toString(),
    };
    props.onClickHandler(allValues);
    setUserName("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null);
    setUserName("");
    setAge("");
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className="user-interface">
        <form>
          <div className="user-interface__name">
            <label>Username</label>
            <input type="text" value={usernames} onChange={changeUserName} />
          </div>
          <div className="user-interface__age">
            <label>Age (Years)</label>
            <input type="number" value={ages} onChange={changeUserAge} />
          </div>
          <div className="user-interface__button">
            <button type="submit" onClick={addUsers}>
              Add User
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserInfo;
