import React from "react";
// import './header.css'

const Completed = () => {
    return (
        <li className="completed">
            <div className="view">
                <input className="toggle" type="checkbox"></input>
                    <label>
                        <span className="description">Completed task</span>
                        <span className="created">created 17 seconds ago</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy"></button>
            </div>
        </li>
    )
}

export default Completed