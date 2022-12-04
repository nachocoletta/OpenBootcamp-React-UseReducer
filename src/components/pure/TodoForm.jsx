import React, { useReducer, useContext, useRef} from 'react'
import { CREATE, ON_CHANGE }from '../../actions/createTodoActions.js'
import { initialState, myContext } from '../../App.js'
import { createTodoReducer} from '../../reducers/createTodoReducer.js'
import  TodoList  from './TodoList'

export const TodoForm = () => {
      
    const todoRef = useRef();

    const [state, dispatch] = useReducer(createTodoReducer, initialState)

    //   const { todos, todosDetalle } = state;
    // console.log(state.todos)
    const submit =  (e) => {
        e.preventDefault();
        // console.log(e)

        // console.log('entra')
        // console.log(`TodoRef ${todoRef.current.value}`)
        // await console.log(`e.currentTarget.value ${e.currentTarget.value}`)
        // alert(e.current.value)

        // dispatch(createTodo({id: 2,
        //     todos: 'tarea 2',
        //     completed: false}))
        // console.log(state)
        // console.log(`State en submit ${state.todos.length}`)

        let newID;
        newID = state.todos[state.todos.length-1].id + 1;
        if (isNaN(newID) )  
            newID = 1 
        // elnewID ;
        dispatch({
            type: CREATE,
            payload: {id: newID, todoName: todoRef.current.value, completed: false}
        });
       
        // console.log(`initialState ${initialState.todos[0].todoName}`)
        // console.log(`TodoRef ${todoRef.current.value}`)
        // console.log(`state todos ${state.todos}`)
    }

    return (
        <myContext.Provider value={state}>
            <div>
                <form onSubmit={submit}>
                    <input
                        type='text'
                        placeholder='Nueva tarea...'
                        // value={todos}
                        ref={todoRef}
                        onChange={  (e) => {
                                        dispatch({
                                            type: ON_CHANGE,
                                            // fieldName:'todoName',
                                            payload: e.currentTarget.value
                                            // payload:  todoRef.current.value
                                            })
                        }}
                    />
                    <button type='sumbit'
                        onClick={(e) => submit(e)}
                    >
                        Nueva Tarea
                    </button>
                </form>
               
                <TodoList 
                    todos={state}
                    onTodoClick={ () => {
                                            alert(`hola`); 
                                            }}
                />
            </div>
        </myContext.Provider>
    );
  }