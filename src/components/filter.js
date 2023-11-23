import React, {Component} from "react";

export default class Filter extends Component{
    render() {
        // console.log(this.props.classes[0].all)
        return (
            <ul className="filters">
                <li onClick={this.props.changeSelected}>
                    <button
                        id='all'
                        className={this.props.classes[0].all}>All</button>
                </li>
                <li onClick={this.props.changeSelected}>
                    <button
                        id='active'
                        className={this.props.classes[1].active}>Active</button>
                </li>
                <li onClick={this.props.changeSelected}>
                    <button
                        id='completed'
                        className={this.props.classes[2].completed}>Completed</button>
                </li>
            </ul>
        )
    }

}
