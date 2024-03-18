import { useState } from "react";


const Showtodo = ({todos,setTodos})=>{
 const Delete = ({id})=>{
    setTodos(todos.filter((todo)=> todo.id !==id))

 }   
    

    return(
        <>

            <div>
                {todos.map((todo)=>(
                    <li className="todoList" key={todo.id}>
                        
                        {todo.task} <button >Edit</button> <button onClick={()=>Delete(todo)}>Delete</button>
                    </li>
                ))}
            </div>
            
        
        </>
    )
}

export default Showtodo;

