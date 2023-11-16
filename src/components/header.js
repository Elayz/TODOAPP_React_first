import React, {useState} from "react";
import Completed from "./completed";
import Active from "./active";
import Footer from "./footer";
// import ChildComponent from './ChildComponent';





const Header = () => {
    const [inputValue, setInputValue] = useState("");
    const [components, setComponents] = useState([]);
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setComponents([...components, inputValue]);
        }
        setInputValue(""); // Сбрасываем значение поля ввода
    };


    return (
        <div>
            <header className="header">
                <h1>todos</h1>
                <input onKeyDown={handleKeyDown} className="new-todo" placeholder="What needs to be done?" autoFocus></input>
                <section className="main">
                    <ul className="todo-list">
                        <Completed></Completed>
                        {/*<Editing></Editing>*/}
                        <Active inputValue = {inputValue}></Active>
                    </ul>
                    <Footer></Footer>
                </section>
            </header>
        </div>
    )
}

export default Header