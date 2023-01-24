import React from "react";

export const Navbar = ({ filterItem, newData }) => {
  return (
    <>
      <div className="Navbar">
        <div className="btn-group">
          {newData.map((currEle, index) => {
            return (
              <button
                className="btn"
                key={index}
                onClick={() => filterItem(currEle)}
              >
                {currEle}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
