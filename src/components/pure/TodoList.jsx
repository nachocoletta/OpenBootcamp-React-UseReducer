import React, { useContext, useReducer } from 'react'
import Todo from './Todo'
import { myContext, initialState }  from '../../App.js'
import { COMPLETE }from '../../actions/createTodoActions.js'
import { createTodoReducer} from '../../reducers/createTodoReducer.js'

export default function TodoList({todos, onTodoClick}) {

  const state = useContext(myContext);

  // console.log(state)
  const [estado, dispatch] = useReducer(createTodoReducer, initialState)

  console.log(estado)
  // console.log(`todos ${todos.todoName}`)
  // console.log(`state ${state.todos[0].id}`)
  // console.log(state.todos.length);
  // console.log(`Todos ${todos}`)
  return (
    <div>
          <h1>Crea tu TODO</h1>
          <ul>
            {/* <Todo
                key={state[0].id}
                {...state[0]}
                // onClick={ () => onTodoClick(state.id)}
            >
              {state[0].id} {state[0].todoName}
            </Todo> */}
              {/* {console.log(`Todos ${Object.keys(todos.todos[0])}`)} */}
              {/* {
                  todos.todos.map((todo, index) => {
                      return (
                          <Todo
                              key={index}
                              {...todo}
                              onClick={ (e) => {
                                // alert('hola')
                                e.preventDefault();
                                // alert(todo.id)
                                dispatch({
                                            type: COMPLETE,
                                            // fieldName:'todoName',
                                            payload: {id: todo.id, completed: true}
                                            // payload:  todoRef.current.value
                                            })
                              }}
                          />
                      )

                  })
              } */}
              

              {
                
                state.todos.map((todo, index) => {
                  return (
                          <Todo
                              key={index}
                              {...todo}
                              // onClick={ () => onTodoClick(todo.id)}
                              onClick={ (e) => {
                                // alert('hola')
                                e.preventDefault();
                                dispatch({
                                            type: COMPLETE,
                                            // fieldName:'todoName',
                                            payload: {id: todo.id, completed: true}
                                            // payload:  todoRef.current.value
                                            })
                              }}

                          />
                      )
                })
              }
          </ul>
      </div>
    
    
   
    /* <myContext.Consumer> */
      // <div>
      //     <h1>Crea tu TODO</h1>
      //     <ul>
      //       {/* <Todo
      //           key={state[0].id}
      //           {...state[0]}
      //           // onClick={ () => onTodoClick(state.id)}
      //       >
      //         {state[0].id} {state[0].todoName}
      //       </Todo> */}
      //         {/* {console.log(`Todos ${Object.keys(todos.todos[0])}`)} */}
      //         {/* {
      //             todos.todos.map((todo, index) => {
      //                 return (
      //                     <Todo
      //                         key={index}
      //                         {...todo}
      //                         onClick={ () => onTodoClick(todo.id)}
      //                     />
      //                 )

      //             })
      //         } */}
              

      //         {
      //           state.todos.map((todo, index) => {
      //             return (
      //                     <Todo
      //                         key={index}
      //                         {...todo}
      //                         onClick={ () => onTodoClick(todo.id)}
      //                     />
      //                 )
      //           })
      //         }
      //     </ul>
      // </div>
    // </myContext.Consumer>
  )
}
