import React from "react";

function Blockkk({ block, id }) {
  console.log(id, "dasd");
  return (
    <div className="main" style={{ background: block }}>
      {block}
    </div>
  );
}

export default Blockkk;
