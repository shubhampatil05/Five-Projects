import React, { useReducer, useState } from "react";
import "./Style.css";

// Counter Using useState;

// export const Counter = () => {
//   const [count, setCount] = useState(0);

//   const Increment = (inc) => {
//     setCount(count + 1);
//   };
//   const Decrement = (dec) => {
//     count === 0 ? setCount(0) : setCount(count - 1);
//   };

//   return (
//     <>
//       <div className="container-fluid">
//         <h3>{count}</h3>

//         <div className="btn-group">
//           <button
//             className="btn btn-outline-info"
//             onClick={() => Increment("inc")}
//           >
//             Increment
//           </button>
//           <button
//             className="btn btn-outline-info"
//             onClick={() => Decrement("dec")}
//           >
//             Decrement
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

//-------------------------------------------

// Counter Using useREducer;

const initialState = 0;

const reducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;

    case "RESET":
      return (state = 0);

    default:
      return state;
  }
};
export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="container-fluid">
        <h3>{state}</h3>
        <div className="btn-group">
          <button
            className="btn btn-outline-info"
            onClick={() => {
              dispatch({ type: "INCREMENT" });
            }}
          >
            Increment
          </button>
          <button
            className="btn btn-outline-info"
            onClick={() => {
              state === 0 ? dispatch(0) : dispatch({ type: "DECREMENT" });
            }}
          >
            Decrement
          </button>

          <button
            className="btn btn-outline-info"
            onClick={() => {
              dispatch({ type: "RESET" });
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};
