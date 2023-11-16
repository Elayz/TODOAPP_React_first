import React from "react";
import Filter from "./filter";
// import './header.css'


let numberOfTodos = 0
const Footer = () => {
    return (
        <footer className="footer">
            <span className="todo-count">{numberOfTodos} items left</span>
            <Filter></Filter>
            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}

export default Footer