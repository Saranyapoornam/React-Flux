import Dispatcher from "./Dispatch";
export function createTodo(text){
    Dispatcher.dispatch({
        type:"CREATE_TODO",
        text
    })
}
export function deleteTodo(id){
    Dispatcher.dispatch({
        type:"DELETE_TODO",
        id
    })
}