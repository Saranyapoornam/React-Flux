import {EventEmitter} from 'events'
import Dispatcher from './Dispatch'

class TodoStore extends EventEmitter{
constructor(){
    super()
    this.todos=[
            {id:1,text:"Learn react",complete:false},
            {id:1,text:"Learn react hooks",complete:false},
            {id:1,text:"Learn redux",complete:false},
            {id:1,text:"Learn lifecycle",complete:false}
    ]
}
createTodo(text){
    const id = Date.now();
    this.todos.push({
        id,
        text,
        complete:false
    })
    this.emit('change')
}

getAll(){
    return this.todos;
}
handleActions(action){
switch(action.type){
    case "CREATE_TODO":{
        this.createTodo(action.text)
    }
   
}
}

}
const todostore = new TodoStore();
Dispatcher.register(todostore.handleActions.bind(todostore))
window.Dispatcher = Dispatcher
export default todostore