import React, {Component} from "react";
import ActiveItem from "./active-item";


export default class Active extends Component{
    render() {
        const elsements = this.props.children.map((item)=>{
            return(
                <ActiveItem
                    key={item.id}
                    name={item.value}
                    done={item.done}
                    onDelete={()=> this.props.onDeleted(item.id)}
                    onToggleDone={()=>this.props.onToggleDone(item.id)}>
                </ActiveItem>
            )
        })
        return (
            <ul className="todo-list">
                {elsements}
            </ul>
        )
    }
}




