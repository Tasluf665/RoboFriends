import React from "react";

const Scroll = (props) => {
   return (
      <div
         style={{
            overflow: "scroll",
            overflowX: "hidden",
            border: "1px solid black",
            height: "450px",
         }}
      >
         {props.children}
      </div>
   );
};

export default Scroll;
