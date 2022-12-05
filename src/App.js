import React,{useState} from 'react';
import TodoList from './TodoList';

const App = () =>{

  const [task,setTask]=useState("")
  const [todos,setTodos]=useState([])

  const onChangeEventHandler=(event)=>{
       setTask(event.target.value);
       }
  const onSubmitEventHandler=(event)=>{
       event.preventDefault();
       const newtodos=[...todos,task];
       setTodos(newtodos);
       setTask("")       
  }
  const deleteHandler=(indexvalue)=>{
    const newTodos=todos.filter((todo,index)=>index!==indexvalue)
    setTodos(newTodos)
  }
  return(
    <div>
      <center>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">To do Management Application</h4>
            <form onSubmit={onSubmitEventHandler}>
              <input size="25" type="text" name="task" placeholder="Enter a To do" value={task} onChange={onChangeEventHandler}/> &nbsp; &nbsp;
              {/* <br/>
              <br/> */}
              <input type="submit" value="Add" name="Add"/>
            </form>
            <TodoList todolist={todos} deleteHandler={deleteHandler}/>
        </div>
      </div>
      </center>
    </div>
  )
}

export default App

