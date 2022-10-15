import React from "react";
import Blockkk from "./Blockkk";

function Bloks({ block, color }) {
  console.log(block, "bodo");
  return (
    <div>
      {block.map((el) => {
        if (el.block === "color") {
          return (el.block = "gray");
        } else if (+el.block > 0) {
          return (el.block = "red");
        }
        return <Blockkk key={el.id} id={el.id} block={el.block} />;
      })}
    </div>
  );
}

export default Bloks;
