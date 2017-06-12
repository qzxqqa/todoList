import React from 'react';
import ReactDom from 'react-dom';
import TodoHeader from './components/TodoHeader'

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            todos:["hello","xieqq"]
        }
    }
    addTodo(todoItem){
        this.setState({
            todos:this.state.todos.push(todoItem)
        });
        console.log(this.state.todos);
    }
    render(){
        return(
            <div>
                <TodoHeader addTodo={this.addTodo.bind(this)} todoList={this.state.todos}/>
            </div>
        )
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('app')
);