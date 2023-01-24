import React from "react";

export const MenuCard = ({ props }) => {
  return (
    <>
      <div className="Restro">
        {props.map((currEle) => {
          const { id, image, name, category, price, description } = currEle;

          return (
            <div className="Container" key={id}>
              <div className="Card">
                <span className="Number">{id}</span>
                <span className="Author">{category}</span>
                <h2 className="Title">{name}</h2>
                <div className="Description">{description}</div>
                <span className="Read">Read</span>

                <img className="Image" src={image} alt="images" />

                <span className="Order">Order Now</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
