import React, {useState, Component} from "react";
import Active from "./active";
import Filter from "./filter";



export default class Header extends Component{

    constructor() {
        super()
        let maxId = 0;
        const dateNow = new Date()
        this.state = {
            label: '',
            currentValues:
                [
                    {value: 'first', id:1, done: false, date:dateNow},
                    {value: 'second', id:2, done: false, date:dateNow},
                    {value: 'third', id:3, done: false, date:dateNow},
                ],
            inputValue:
                [

                ],
            selected: {
                all: true,
                active: false,
                completed: false
            },
            classes: [
                {all: ''},
                {active: ''},
                {completed: ''}
            ],
        };
        this.state.inputValue = this.state.currentValues


        this.updateData = (item) =>{
            if(item.value !== ''){
                this.setState(({inputValue}) => {
                    const newArray = [...inputValue];
                    newArray.push(item)
                    return{
                        inputValue: newArray,
                        currentValues: newArray
                    };
                })
                this.forceUpdate()
            }
        }
        this.deleteItem = (id) =>{
            this.setState(({currentValues}) =>{
                const index = currentValues.findIndex((el) => el.id === id);
                const before = currentValues.slice(0, index);
                const after = currentValues.slice(index+1);
                const new_mass = [...before, ...after]
                return{
                    inputValue: new_mass,
                    currentValues: new_mass
                }
            })
        };
        this.onToggleDone = (id) =>{
            this.setState(({inputValue})=>{
                const index = inputValue.findIndex((el) => el.id === id);
                const oldItem = inputValue[index];
                const newItem = {...oldItem, done: !oldItem.done}

                const newArray = [
                    ...inputValue.slice(0, index),
                    newItem,
                    ...inputValue.slice(index+1),
                ];
                return{
                    inputValue: newArray,
                    currentValues: newArray
                };

            })
        };
        this.onLabelChange = (e) => {
            this.setState({
                label: e.target.value
            })
        };
        this.onSubmit = (e) => {
            this.state.inputValue.forEach(obj => {
                if (obj.id > maxId) {
                    maxId = obj.id;
                }
            });
            e.preventDefault();
            const dateNoww = new Date()
            const newItem = {
                value: this.state.label,
                id: maxId + 1,
                done: false,
                date:dateNoww
            }
            this.updateData(newItem)
            this.setState({
                label: ''
            })
        }
        this.deleteDoneItems = () =>{
            const newItem = this.state.currentValues.filter((doneItem)=> !doneItem.done)
            this.setState(() => {
                return{
                    currentValues: newItem,
                    inputValue: newItem
                };
            })
            this.forceUpdate()
        }
        this.changeSelected = (e) => {
            const newState = [
                {all: ''},
                {active: ''},
                {completed: ''}
            ]
            switch (e.target.id) {
                case 'all':
                    newState[0].all = 'selected'
                    this.setState({
                        inputValue: this.state.currentValues
                    })
                    break;
                case 'active':
                    newState[1].active = 'selected'
                    this.setState({
                        inputValue: this.state.currentValues.filter(el=>!el.done)
                    })
                    break;
                case 'completed':
                    this.setState({
                        inputValue: this.state.currentValues.filter(el=>el.done)
                    })
                    newState[2].completed = 'selected'
                    break;
            }
            this.setState({
                classes: newState
            })
        }
    }




    render() {
        const doneItemCount = this.state.currentValues.filter((el)=>el.done).length;
        let leftItems = 0
        const leftItemsFilt = this.state.currentValues.map(el=> {
            if(!el.done){
                leftItems++
            }
        })
        // this.state.inputValue.length - doneItemCount;
        return (
            <div>
                <form className="header"
                      onSubmit={this.onSubmit}>
                    <h1>todos</h1>
                    <input
                        className="new-todo"
                        placeholder="What needs to be done?"
                        autoFocus
                        onChange={this.onLabelChange}
                        value={this.state.label}
                    ></input>
                </form>
                <section className="main">
                    <Active
                        onToggleDone={this.onToggleDone}
                        onDeleted={this.deleteItem}>{this.state.inputValue}
                    </Active>
                </section>
                <footer className="footer">
                    <span className="todo-count">{leftItems} items left</span>
                    <Filter
                        classes={this.state.classes}
                        selected={this.state.selected}
                        changeSelected={this.changeSelected}
                    >
                    </Filter>
                    <button
                        className="clear-completed"
                        onClick={this.deleteDoneItems}
                    >Clear completed
                    </button>
                </footer>
            </div>

        )
    }
}



