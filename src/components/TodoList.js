import React,{Component} from 'react'
import todostore from '../store/Action';

class TodoList extends Component{
    constructor(){
        super()
        this.state={
            todos: todostore.getAll()
        }
    }
    render(){
        const todo= this.state.todos.map((el,key) => <h1 key={key}>{el.text}</h1>)
        return(
            <div>
                {
                    todo
                }
            </div>
        )
        
    }
}

export default TodoList