import React,{Component} from 'react'
import todostore from '../store/Store';
import * as TodoActions from '../store/Actions';
class TodoList extends Component{
    constructor(){
        super()
        this.state={
            todos: todostore.getAll()   
        }
    }
    componentWillMount(){
        todostore.on('change',()=>{
            this.setState({
                todos:todostore.getAll()
            })
        })
    }
    createTodo(){
        TodoActions.createTodo(Date.now())
    }
    render(){
        const todo= this.state.todos.map((el,key) => <p key={key}>{el.text}</p>)
        return(
            <div>
                <h1>Todo Application using Flux</h1>
                <button onClick={this.createTodo}>Create Todo</button>
                {
                    todo
                }
            </div>
        )
        
    }
}

export default TodoList