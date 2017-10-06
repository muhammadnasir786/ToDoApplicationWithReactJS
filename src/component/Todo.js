import React, { Component } from 'react';
// class Todo extends React.Component {
//     render() {
//         return (
//             <li className={this.props.details.completed ? 'completed' : ''} onClick={() => { this.props.clickHandler(this.props.index) }}>
//                 {this.props.details.name}
//             </li>
//         );
//     }


// }
// ========================State Less Component

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
        this.renderForm = this.renderForm.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.toggleState = this.toggleState.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }
    updateItem(evt){
        evt.preventDefault();
        // console.log(this.input.value)
        this.props.editTask(this.props.index,this.input.value)
        this.toggleState();
    }
    toggleState(){
        this.setState({
            isEditing : !this.state.isEditing
        })
    }
    renderItem() {
        return (
            <li className={this.props.details.completed ? 'completed' : ''} onClick={() => { this.props.clickHandler(this.props.index) }}>
                {this.props.details.name}
                <button onClick={(e) => {
                    e.stopPropagation();  //to stop event bouncs to parent Elements
                    this.props.deleteTask(this.props.index)
                }}>Delete</button>
                <button onClick={(e) => {
                    e.stopPropagation();  //to stop event bouncs to parent Elements
                    this.toggleState();
                }}>Edit</button>
            </li>
        );
    }
    renderForm() {
        return (<form onSubmit={this.updateItem}>
            <input type="text" ref={(value)=>{
                this.input  = value;
            }
            } defaultValue={this.props.details.name}></input>
            <button type="submit">Update Value</button>
        </form>);
    }
    render() {
        const { isEditing } = this.state; // Both are same line 23 and 24
        // const isEditing = this.state.isEditing;

        return (
            <section>
                {
                    isEditing ? this.renderForm() : this.renderItem()
                }
            </section>
        );
    }
}



export default Todo;