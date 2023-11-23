import React, {Component} from "react";


export default class ActiveItem extends Component {
    render() {
        const name = this.props.name
        let classNames = ""
        if (this.props.done){
            classNames += "completed"
        }
        return(
            <li className={classNames}>
                <div className="view">
                    <input
                        onClick={this.props.onToggleDone}
                        className="toggle" type="checkbox"/>
                    <label>
                        <span className='description'>{name}</span>
                        <span className="created">created 5 minutes ago</span>
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



