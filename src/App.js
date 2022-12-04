import React, { useReducer, useContext, useRef, useState} from 'react'
import './App.css';
import Counter from './components/Counter';
import Loginusereducer from './components/LoginUseReducer';
import Loginusestate from './components/LoginUseState';
// import TodoForm from './components/pure/TodoForm';
import TodoList from './components/pure/TodoList';
import { TodoForm } from './components/pure/TodoForm'; 
// import { createTodoReducer } from './components/pure/TodoForm.jsx'
import { createTodoReducer } from './reducers/createTodoReducer';
import { ON_CHANGE } from './actions/createTodoActions';
// import { CREATE, ON_CHANGE, COMPLETE} from './actions/createTodoActions'

export const myContext = React.createContext(null);

// export const ON_CHANGE = 'ON_CHANGE';
// export const CREATE = 'CREATE';
// export const COMPLETE = 'COMPLETE';
// const DELETE = 'DELETE';


// ESTADO INICIAL

export const initialState = {
    todos: [{}]
    // todos: [{
    //     id: 0,
    //     todoName: 'tarea inicial',
    //     completed: false
    //     },
    //     {
    //     id: 1,
    //     todoName: 'tarea 2',
    //     completed: false
    //     } ],
    // todosDetalle: {}
  }


//   const createTodoReducer = (state, action) => {
//     // console.log(`state.todoName ${state.todoName}`)
//     // console.log(`action.filedname ${action.fieldName}`);
//     // console.log(estadoInicial)
    
//     switch (action.type) {
//         case ON_CHANGE:
//             // console.log(`action.payload ${action.payload}`)
//             // console.log(`state ${action.fieldName}`)
//             // return {
//             //     ...state,
//             //     [action.fieldName]: action.payload
//             // }
//             // for(let i in state){
//             //     console.log(`State en ON_CHANGE ${i}- ${state.todos[i]}`)
//             // }
//             return {
//                 ...state,
//                 // ...state,
//                 // todos: [action.payload]
//             }
//         case CREATE:
//             // console.log('entra');
//             // console.log(state.todoName)
//             // console.log(`objeto ${state.id} ${state}`);
//             // state.forEach(elemento => console.log(elemento))
//             // console.log(ultimaPosicion)
//             // console.log(`${state.id + 1}`)
//             // console.log(`State ${state}`)
//             // console.log(`state.todos ${state.todos}`)

//             // console.log(`state.todos.length ${state.todos.length}`)
//             // state.todos.push({id: 2, todoName: action.payload, completed: false})
//             // console.log(`action.payload ${action.payload.id}`)
//             // console.log(`State ${state.todos}`)
//             return {
//                 ...state,

//                 todos: [...state.todos, action.payload],
//                 // todos: [action.payload],
//                 // id: state.id + 1,
//                 // completed: false,
//                 // // todoName: action.payload
//                 // todoName: [...state.todoName, action.payload]
//             }
//             // console.log(`State.todoName ${state.todoName}`)
//             // console.log(`Payload ${action.payload}`)

//         case COMPLETE:
//             return {
//                 ...state,
//                 completed: true
//             }
//         default:
//             return state;
//     }
// }



//   const TodoForm = () => {
      


//     //  const createTodoReducer = (state, action) => {
//     //       // console.log(`state.todoName ${state.todoName}`)
//     //       // console.log(`action.filedname ${action.fieldName}`);
//     //       // console.log(estadoInicial)
//     //       switch (action.type) {
//     //           case ON_CHANGE:
//     //               // console.log(`action.payload ${action.payload}`)
//     //               // console.log(`state ${action.fieldName}`)
//     //               // return {
//     //               //     ...state,
//     //               //     [action.fieldName]: action.payload
//     //               // }
//     //               // for(let i in state){
//     //               //     console.log(`State en ON_CHANGE ${i}- ${state.todos[i]}`)
//     //               // }
//     //               return {
//     //                   ...state,
//     //                   // ...state,
//     //                   // todos: [action.payload]
//     //               }
//     //           case CREATE:
//     //               // console.log('entra');
//     //               // console.log(state.todoName)
//     //               // console.log(`objeto ${state.id} ${state}`);
//     //               // state.forEach(elemento => console.log(elemento))
//     //               // console.log(ultimaPosicion)
//     //               // console.log(`${state.id + 1}`)
//     //               // console.log(`State ${state}`)
//     //               // console.log(`state.todos ${state.todos}`)

//     //               // console.log(`state.todos.length ${state.todos.length}`)
//     //               // state.todos.push({id: 2, todoName: action.payload, completed: false})
//     //               // console.log(`action.payload ${action.payload.id}`)
//     //               // console.log(`State ${state.todos}`)
//     //               return {
//     //                   ...state,

//     //                   todos: [...state.todos, action.payload],
//     //                   // todos: [action.payload],
//     //                   // id: state.id + 1,
//     //                   // completed: false,
//     //                   // // todoName: action.payload
//     //                   // todoName: [...state.todoName, action.payload]
//     //               }
//     //               // console.log(`State.todoName ${state.todoName}`)
//     //               // console.log(`Payload ${action.payload}`)

//     //           case COMPLETE:
//     //               return {
//     //                   ...state,
//     //                   completed: true
//     //               }
//     //           default:
//     //               return state;
//     //       }
//     //   }



//     // const estado = useContext(myContext)
//     // console.log(`estado context ${estado.todos[0].todoName} --- ${Object.keys(estado)}`)
    
//     const todoRef = useRef();

//     const [state, dispatch] = useReducer(createTodoReducer, initialState)

//     //   const { todos, todosDetalle } = state;
//     // console.log(state.todos)
//     const submit =  (e) => {
//         e.preventDefault();
//         // console.log(e)

//         // console.log('entra')
//         // console.log(`TodoRef ${todoRef.current.value}`)
//         // await console.log(`e.currentTarget.value ${e.currentTarget.value}`)
//         // alert(e.current.value)

//         // dispatch(createTodo({id: 2,
//         //     todos: 'tarea 2',
//         //     completed: false}))
//         // console.log(state)
//         // console.log(`State en submit ${state.todos.length}`)
//         let newID = state.todos[state.todos.length-1].id + 1;
//         dispatch({
//             type: CREATE,
//             payload: {id: newID, todoName: todoRef.current.value, completed: false}
//         });
       
//         // console.log(`initialState ${initialState.todos[0].todoName}`)
//         // console.log(`TodoRef ${todoRef.current.value}`)
//         // console.log(`state todos ${state.todos}`)
//     }

//     return (
//         <myContext.Provider value={state}>
//             <div>
//                 <form onSubmit={submit}>
//                     <input
//                         type='text'
//                         placeholder='Nueva tarea...'
//                         // value={todos}
//                         ref={todoRef}
//                         onChange={  (e) => {
//                                         dispatch({
//                                             type: ON_CHANGE,
//                                             // fieldName:'todoName',
//                                             payload: e.currentTarget.value
//                                             // payload:  todoRef.current.value
//                                             })
//                                             // for(let i of state){
//                                             //     console.log(`State en ON_CHANGE ${i}- ${todos[i]}`)
//                                             // }
//                                         // console.log(`funcion ${funcion}`)
//                                         // console.log(todoRef.current.value);
//                         }}
//                     />
//                     <button type='sumbit'
//                         onClick={(e) => submit(e)}
//                     >
//                         Nueva Tarea
//                     </button>
//                 </form>
//             </div>
//         </myContext.Provider>
//     );
//   }


function App() {

    const [state, dispatch] = useReducer(createTodoReducer, initialState);
//   const estado = useContext(myContext);

    const [estado, setEstado] = useState(initialState)
//   console.log(`Estado en APP- ${estado.todos[0].id}`)
//   const [state] = useReducer(createTodoReducer, estadoInicial);

//   console.log(state)
//   console.log(Object.keys(state.todos[0]))
//   const state = useContext(myContext);

    
    return (
        <myContext.Provider value={state}>
            <div className="App">
                <header className="App-header">
                    {/* <h1>useReducer Examples</h1> */}
                    {/* <Counter></Counter> */}
                    {/* <Loginusestate></Loginusestate> */}
                    {/* <Loginusereducer></Loginusereducer> */}
                    <h1>APP Crear TODO</h1>
                    <TodoForm></TodoForm>
                    {/* <TodoList
                        todos={state}
                        onTodoClick={ () => {
                                                alert(`hola`); 
                                             }}
                    >
                    </TodoList> */}
                </header>
            </div>
        </myContext.Provider>
    );
}

export default App;
