import React from "react";
import "./Template.css";


const Template = ({ children, todoLength }) => {
  return (
    <div className="Template">
      <div className="title">오늘 할 일 ({todoLength}개) </div>
      <div>{children}</div>
    </div>
  );
};

export default Template;