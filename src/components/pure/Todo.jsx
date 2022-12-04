import React from 'react';

const Todo = ({ onClick, completed, todoName, id}) => {

    
    return isNaN(id) ? ('Crea un nuevo todo')  :
     (
            <li onClick={onClick}
                style={{
                    textDecoration: completed ? 'line-through': 'none',
                    textDecorationColor: completed ? 'green' : 'none',
                    color: completed ? 'green' : 'white'  
                }} 
            >
                { `${id}- ${todoName}`}
                
            </li>
        
        // <li onClick={onClick}
        //     style={{
        //         textDecoration: completed ? 'line-through': 'none',
        //         textDecorationColor: completed ? 'green' : 'none',
        //         color: completed ? 'green' : 'white'  
        //     }} 
        // >
        //     { isNaN(id) ? 'Crea un nuevo todo' : `${id}- ${todoName}`}
            
        // </li>
    );
}

export default Todo;
