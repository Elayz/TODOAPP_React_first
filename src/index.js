import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./components/header";
import Completed from "./components/completed";
import Editing from "./components/editing";
import Active from "./components/active";
import Footer from "./components/footer";


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
        <section className="todoapp">
            <Header></Header>
        </section>
)


