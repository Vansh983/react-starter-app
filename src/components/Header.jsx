import React from "react";

const Header = ({ handleShowForm }) => {
  var date = new Date().toLocaleString() + "";
  return (
    <header className="row">
      <div>
        <h1>Tasks for the day</h1>
        <h4>{date}</h4>
      </div>
      <button className="btn btn-primary" onClick={handleShowForm}>
        Add task
      </button>
    </header>
  );
};

export default Header;
