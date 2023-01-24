import React, { useState } from "react";
import { ApiData } from "./ApiData";
import { MenuCard } from "./MenuCard";
import { Navbar } from "./Navbar";
import "./Style.css";

const Unique = [
  ...new Set(
    ApiData.map((currEle) => {
      return currEle.category;
    })
  ),
  "All",
];
console.log(Unique);

export const Restaurant = () => {
  const [data, setData] = useState(ApiData);
  const [newData, setNewData] = useState(Unique);

  const filterItem = (category) => {
    if (category === "All") {
      return setData(ApiData);
    }

    const UpdatedItem = ApiData.filter((currEle) => {
      return currEle.category === category;
    });

    setData(UpdatedItem);
  };

  return (
    <>
      <Navbar filterItem={filterItem} newData={newData} />
      <MenuCard props={data} />
    </>
  );
};
