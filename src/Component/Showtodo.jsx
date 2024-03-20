import { useState } from "react";


const Showtodo = ({todos,setTodos,setEdit,inputValue})=>{
    
            const Delete = ({id})=>{
            let newtodos =[...todos];
            newtodos.splice(id,1);
            setTodos(newtodos)
            

        } 
        
        const Edit = ({id})=>{
            let newtodos =[...todos];
            newtodos.splice(id,1,inputValue);
            setEdit(newtodos)
            
        }


    // { if(inputValue.length > 0){

    return(
        <>

            <div>
                {
                
                
                todos.map((todo,index)=>(
                   
                   <li className="todoList" key={index}>
                        
                        {todo.task} <button onClick={()=>Edit(index)}>Edit</button> <button onClick={()=>Delete(index)}>Delete</button>
                    </li>
                ))}
            </div>
            
        
        </>
    )
    // }}
}

export default Showtodo;

