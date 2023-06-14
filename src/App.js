
import React,{} from 'react';
import './App.css';
// import Header from './components/Header';
// import AddList from './components/AddList';
// import Form from './components/Form';
// import Todolist from "./components/TodoList"
// import MyList from './components/MyList';
import MytodoList from './components/MytodoList';
import MyTaskList from './components/MyTaskList';


const App=()=> {

  // const [input,setInput]=useState("");
  // const[todos,setTodos]=useState([]);

  return (
    <div className='body'>
    {/* <div className='container'>
      <div classsName="app-wrapper">
        <div>
          <Header/>
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          />
        </div>
        <div>
          <Todolist todos={todos} setTodos={setTodos}/>
        </div>
      </div>
   
    </div> */}


    < MyTaskList />
    


    </div>
  );
}

export default App;
