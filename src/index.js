import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/header";


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
        <div className="todoapp">
            <Header></Header>
            {/*<Footer></Footer>*/}
        </div>
)


