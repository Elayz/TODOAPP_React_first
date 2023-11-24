import React, {Component} from "react";

// export default class Filter extends Component{
//     render() {
//         return (
//             <ul className="filters">
//                 <li onClick={this.props.changeSelected}>
//                     <button
//                         id='all'
//                         className={this.props.classes[0].all}>All</button>
//                 </li>
//                 <li onClick={this.props.changeSelected}>
//                     <button
//                         id='active'
//                         className={this.props.classes[1].active}>Active</button>
//                 </li>
//                 <li onClick={this.props.changeSelected}>
//                     <button
//                         id='completed'
//                         className={this.props.classes[2].completed}>Completed</button>
//                 </li>
//             </ul>
//         )
//     }
//
// }



const Filter = (props) =>{
    Filter.defaultProps = {
        classes: [
            {all: 'selected'},
            {active: 'selected'},
            {completed: 'selected'}
        ]
    }
    return (
        <ul className="filters">
            <li onClick={props.changeSelected}>
                <button
                    id='all'
                    className={props.classes[0].all}>All</button>
            </li>
            <li onClick={props.changeSelected}>
                <button
                    id='active'
                    className={props.classes[1].active}>Active</button>
            </li>
            <li onClick={props.changeSelected}>
                <button
                    id='completed'
                    className={props.classes[2].completed}>Completed</button>
            </li>
        </ul>
    )
}

export default Filter

















