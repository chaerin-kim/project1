import React from "react";
import "./Template.css";
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md"
import "./TodoItem.css";

const TodoItem = ({ todo }) => {
    const { id, text, checked } = todo;
    return (
        <div className="TodoItem">
            <div className={`content ${checked ? "checked" : ''}`} >
                {checked ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
        </div>

    );
};

export default TodoItem;