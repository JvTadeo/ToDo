import { useState } from 'react'

import './App.css'
//Components
import ListTodo from './components/ListTodo'
import CreateTodo from './components/CreateTodo'

function App() {  
  const [filter, setFilter] = useState("All");
  const [todo, setTodo] = useState([])
  const [isMode, setIsMode] = useState(true);
  //Filter
  const filteredTodos = todo.filter((todo) => {
    return filter === "All" ? true : filter === "Active" ? !todo.completed : todo.completed;
  })

  const addTodo = (title) =>{
    const newTodos = [...todo, 
    {
      id: Math.floor(Math.random() * 1000),
      text: title,
      completed: false
    }]

    setTodo(newTodos);
  }
  const handleCompletedTask = (id) =>{
    const newTodos = [...todo];
    newTodos.map((todo) => todo.id === id ? todo.completed = !todo.completed : todo);    
    setTodo(newTodos);
  }
  const cleanCompleted = () => {
    const newTodos = [...todo];
    const filter = newTodos.filter((todo) => !todo.completed);
    setTodo(filter);
  }
  const deleteTodo = (id) =>{
    const newTodos = [...todo];
    const filter = newTodos.filter(todo => todo.id !== id ? todo : null)
    setTodo(filter);
  }
  const handleDragStart = (e, todo) =>{
    e.dataTransfer.setData("application/json", JSON.stringify(todo));
  }
  const handleDragOver = (e) => {
    e.preventDefault();
  }
  const handleDrop = (e, targetTodo) => {
    const draggedTodo = JSON.parse(e.dataTransfer.getData("application/json"))
    const newTodos = [...filteredTodos];

    const draggedIndex = newTodos.findIndex((todo) => todo.id === draggedTodo.id);
    const targetIndex = newTodos.findIndex((todo) => todo.id === targetTodo.id);
    
    const dropPosition = e.clientY > e.target.offsetTop + e.target.offsetHeigh / 2 ? 1 : 0;
    const insertIndex = targetIndex + dropPosition;    
    
    newTodos.splice(draggedIndex, 1);
    newTodos.splice(insertIndex, 0, draggedTodo);

    setTodo(newTodos);
  }
  const handleLightDarkMode = () => {
    setIsMode(!isMode);
    //console.log(isMode);
  }
  
  return (
    <div className={`flex flex-col items-center justify-center font-JosefinSans ${isMode ? 'bg-very-dark-blue' : 'bg-slate-200'}  h-full min-h-screen `}>
      <div className='w-full absolute top-0 z-0'>    
        {isMode ?
          <img  src="/images/bg-mobile-dark.jpg" alt="img-phone" className='bg-contair w-full z-[-1] md:hidden'/> 
        : 
          <img src="/images/bg-mobile-light.jpg" alt="img-phone" className='bg-contair w-full z-[-1] md:hidden'/>
        }
        {isMode ? 
          <img  src="/images/bg-desktop-dark.jpg" alt="img-phone" className='bg-contair w-full z-[-1] hidden md:block'/>  
        : 
          <img src="/images/bg-desktop-light.jpg" alt="img-phone" className='bg-contair w-full z-[-1] hidden md:block'/>
        }    
      </div>
      <div className='w-3/4 md:w-2/4 text-sm items-center mt-8 z-10'>        
          <div className='flex justify-between pb-14 text-white '>
            <p className='font-bold text-3xl tracking-[.40em]'>TODO</p>
            <button onClick={handleLightDarkMode}>
              {isMode ? 
              <svg xmlns="http://www.w3.org/2000/svg" transform="scale(0.8)"width="26" height="26"><path fill="#FFF" fillRule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" transform="scale(0.8)" width="26" height="26"><path fill="#FFF" fillRule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>}            
            </button>
          </div>
          <CreateTodo addTodo={addTodo} isMode={isMode}/>             
      </div>        
      <div className={`${isMode ? 'bg-very-dark-desaturated-blue' : 'bg-light-very-light-gray'} items-center rounded-lg w-3/4 md:w-2/4   max-h-3/4 text-sm mt-5 divide-y-2 divide-slate-600/20 z-10`}>
          {filteredTodos.map((todo) => (          
            <ListTodo key={todo.id} todo={todo} taskCompleted={handleCompletedTask} deleteTodo={deleteTodo} isMode={isMode} handleDragStart={(e) => handleDragStart(e, todo)} handleDragOver={handleDragOver} handleDrop={handleDrop}/>
          ))}
        <div className='flex flex-row justify-evenly py-4 text-dark-grayish-blue px-4'>
          <p>{filteredTodos.length} items left</p>          
          <button className='focus:text-blue-500 focus:font-medium hidden md:block' onClick={() => setFilter("All")}>All</button>
          <button className='focus:text-blue-500 focus:font-medium hidden md:block' onClick={() => setFilter("Active")}>Active</button>
          <button className='focus:text-blue-500 focus:font-medium hidden md:block' onClick={() => setFilter("Completed")}>Completed</button>
          <button onClick={cleanCompleted}>Clear Completed</button>
        </div>
      </div>
      <div className={`flex justify-evenly w-3/4 md:w-2/4 ${isMode ? 'bg-very-dark-desaturated-blue ' : 'bg-light-very-light-gray'} items-center rounded-lg py-3 text-dark-grayish-blue mt-3 block md:hidden`}>
        <button className='focus:text-blue-500 focus:font-medium' onClick={() => setFilter("All")}>All</button>
        <button className='focus:text-blue-500 focus:font-medium' onClick={() => setFilter("Active")}>Active</button>
        <button className='focus:text-blue-500 focus:font-medium' onClick={() => setFilter("Completed")}>Completed</button>
      </div>
    </div>
  )
}

export default App
