import React, { useEffect, useState } from "react";
import "./Style.css";

const getLocalData = () => {
  const lists = localStorage.getItem("myList");

  if (lists) {
    return JSON.parse(lists); // to convert data in array
  } else {
    return [];
  }
};

export const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [editItem, setEditItem] = useState("");
  const [toggle, setToggle] = useState(false);

  //add the items

  const addItems = () => {
    if (inputData === "") {
      alert("Add Something");
    } else if (inputData && toggle) {
      setItems(
        items.map((currEle) => {
          if (currEle.id === editItem) {
            return { ...currEle, name: inputData };
          }

          return currEle;
        })
      );

      setInputData([]);
      setEditItem(null);
      setToggle(false);
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };

      setItems([...items, myNewInputData]);
      setInputData("");
    }
  };

  //delete the items

  const deleteItems = (index) => {
    const updateItems = items.filter((currEle, id) => {
      return currEle.id !== index;
    });
    setItems(updateItems);
  };

  // edit the items

  const edit = (index) => {
    const EditItem = items.find((currEle) => {
      return currEle.id === index;
    });
    setInputData(EditItem.name);
    setEditItem(index);
    setToggle(true);
  };

  // cheList

  const checkList = () => {
    setItems([]);
  };

  //adding local storage

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="container-fluid">
        <figure>
          <figcaption>Add Your List Here..</figcaption>
        </figure>
        <div className="AddItems">
          <input
            type="text"
            placeholder="Add Items"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          {toggle ? (
            <i className="fa fa-edit add" onClick={addItems}></i>
          ) : (
            <i className="fa fa-plus add" onClick={addItems}></i>
          )}
        </div>

        <div className="ShowItem">
          {items.map((currEle, index) => {
            return (
              <div className="EachItem" key={index}>
                <h5>{currEle.name}</h5>
                <div className="todo-btn">
                  <i
                    className="fa fa-edit edit"
                    onClick={() => edit(currEle.id)}
                  ></i>
                  <i
                    className="far fa-trash-alt delete"
                    onClick={() => deleteItems(currEle.id)}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>

        <div className="ShowItems">
          <button className="btn btn-outline-success" onClick={checkList}>
            CheckList
          </button>
        </div>
      </div>
    </>
  );
};
