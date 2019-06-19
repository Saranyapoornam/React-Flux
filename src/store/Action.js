import {EventEmitter} from 'events'

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
getAll(){
    return this.todos;
}

}
const todostore = new TodoStore();

export default todostore