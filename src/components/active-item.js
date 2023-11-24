import React, {Component} from "react";
import {formatDistance, formatDistanceToNow} from "date-fns"
import KG from 'date-fns/locale/en-AU';


export default class ActiveItem extends Component {
    render() {
        const name = this.props.name
        let classNames = ""
        if (this.props.done){
            classNames += "completed"
        }

        const dateNow = new Date()
        const year = this.props.dateItem.getFullYear();
        const month = this.props.dateItem.getMonth();
        const date = this.props.dateItem.getDate();
        const hours = this.props.dateItem.getHours();
        const minutes = this.props.dateItem.getMinutes();
        const seconds = this.props.dateItem.getSeconds();
        const result = formatDistanceToNow(
            new Date(year, month, date, hours, minutes, seconds),
            {includeSeconds: true}
        )


        return(
            <li className={classNames}>
                <div className="view">
                    <input
                        onClick={this.props.onToggleDone}
                        className="toggle" type="checkbox"/>
                    <label>
                        <span className='description'>{name}</span>
                        <span className="created">{result}</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button
                        onClick={this.props.onDelete}
                        className="icon icon-destroy"></button>
                </div>
            </li>
        )
    }

}



