import React from "react";
import index from "./index.css";

const SlotM = () => {
  let x = "😄";
  let y = "😄";
  let z = "🏩";

  if ((x === y) && (y === z)) {
    return (
      <>
        <div className="slot_inner">
          <h1>{x} {y} {z}</h1>
          <h1> This Is Matching</h1>
          <hr />
        </div>
 
      </>

    )
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>{x} {y} {z}</h1>
          <h1> This Is Not Matching</h1>
          <hr />
        </div>

      </>
    )
  }
}
const App = () => {

  return (
    <>
      <h1 className="heading_style">
        Welcome To <span style={{ fontWeight: "bold" }}> Slot Machine Game</span> </h1>
      <div className="slotmachine">
        <SlotM />
        <SlotM />
        <SlotM />
        <SlotM />
      </div>
    </>
  )
};
export default App;



