import React from "react";
// import './header.css'


const Active = (props) => {
    return (
        <li>
            <div className="view">
                <input className="toggle" type="checkbox"/>
                    <label>
                        <span className="description">{props.inputValue}</span>
                        <span className="created">created 5 minutes ago</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy"></button>
            </div>
        </li>
    )
}

// const inputToDoValue = document.get('toggle')

export default Active