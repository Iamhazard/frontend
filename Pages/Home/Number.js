import React from "react";

const Number = ({ num, text }) => {
  return (
    <div className="mr-4">
      <h3 className="text-white">{num}</h3>
      <p className="text-white">{text}</p>
    </div>
  );
};

export default Number;
