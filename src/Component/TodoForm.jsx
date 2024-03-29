
const TodoForm = ({inputValue, setinputValue, todos, setTodos,edit,setEdit})=>{
    

    const submitHandler = (event)=>{

        event.preventDefault();

       if(inputValue.length > 0){
        setTodos([...todos, {id: todos.length + 1, task: inputValue, completed:false, isEditing:false}]);

       }
       
        setinputValue("");
       
       
    }
    return(
        <>
            <form className="form" onSubmit={submitHandler}>
                <input type ="text" placeholder="Enter a task " value = {inputValue} onChange={(e)=> setinputValue(e.target.value)}></input>
                
                <button type="submit" id="btn">ADD a Task</button>
            </form>
        
        </>
    )
}

export default TodoForm;