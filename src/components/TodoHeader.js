import React from 'react';
import $ from 'jquery'

class TodoHeader extends React.Component{
    constructor(){
        super();
        this.state = {
            todos:[]
        }
    }
    handlerKeyUp(event){
        if(event.keyCode === 13){
            let value = event.target.value;
            if(!value){
                return false;
            };
            let newTodoItem= value;
            event.target.value = "";
            this.props.addTodo(newTodoItem);
        }
    }
    render(){
        return(
            <div>
                <input type="text" onKeyUp={this.handlerKeyUp.bind(this)}/>
                <ul>
                    {
                        $.map(this.props.todoList,function (item,index) {
                            return (<li key={index}>{item}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default TodoHeader;