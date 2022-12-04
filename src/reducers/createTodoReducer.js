import { ON_CHANGE, CREATE, COMPLETE } from '../actions/createTodoActions'

export const createTodoReducer = (state, action) => {
    // console.log(`state.todoName ${state.todoName}`)
    // console.log(`action.filedname ${action.fieldName}`);
    // console.log(estadoInicial)
    

    switch (action.type) {
        case ON_CHANGE:
            // console.log(`action.payload ${action.payload}`)
            // console.log(`state ${action.fieldName}`)
            // return {
            //     ...state,
            //     [action.fieldName]: action.payload
            // }
            // for(let i in state){
            //     console.log(`State en ON_CHANGE ${i}- ${state.todos[i]}`)
            // }
            return {
                ...state,
                // ...state,
                // todos: [action.payload]
            }
        case CREATE:
           
            // console.log(state)
            // console.log(state.todoName)
            // console.log(`objeto ${state.id} ${state}`);
            // state.forEach(elemento => console.log(elemento))
            // console.log(ultimaPosicion)
            // console.log(`${state.id + 1}`)
            // console.log(`State ${state}`)
            // console.log(`state.todos ${state.todos}`)

            // console.log(`state.todos.length ${state.todos.length}`)
            // state.todos.push({id: 2, todoName: action.payload, completed: false})
            // console.log(`action.payload ${action.payload.id}`)
            // console.log(`State ${state.todos}`)
            return {
                ...state,

                todos: [...state.todos, action.payload],
                // todos: [action.payload],
                // id: state.id + 1,
                // completed: false,
                // // todoName: action.payload
                // todoName: [...state.todoName, action.payload]
            }
            // console.log(`State.todoName ${state.todoName}`)
            // console.log(`Payload ${action.payload}`)

        case COMPLETE:
            console.log('entra');
            // console.log(`action.payload ${state.todos.id}`)
            console.log(action.payload.id)
            // console.log(state)
            return {
                ...state,
                todos: state.todos
                // [state.completed]: true
                // todos: state.todos[action.payload.id].completed = true // completed: action.payload
            }
        default:
            return state;
    }
}