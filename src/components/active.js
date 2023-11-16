import React from "react";
import Item from "./active-item";
// import './header.css'

let a = 'ToDo'
const Active = ({props}) => {
    // const elements = props.map((item) =>{
    //     return(
    //         <Item>{item}</Item>
    //     )
    // })
    return (
        <li>
            <div className="view">
                <input className="toggle" type="checkbox"/>
                    <label>
                        {/*<span className="description">{props.inputValue}</span>*/}
                        <Item></Item>
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