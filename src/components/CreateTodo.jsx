import { useState } from "react"

const CreateTodo = ({addTodo, isMode}) => {

  const [title, setTitle] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!title) return;

    addTodo(title)
    setTitle("");
    console.log(isMode);
  }

  return (
    <div className={`flex flex-row py-3 ${isMode ? 'bg-very-dark-desaturated-blue' : 'bg-light-very-light-gray'} rounded-lg`}> 
      <form onSubmit={handleSubmit} className="flex items-center  w-full">
        <button className={`w-8 h-8 mx-3 bg-transparent ring-2 ${isMode ? 'ring-very-dark-grayish-blue' : 'ring-2 ring-light-very-light-blue'} rounded-full`}></button>
        <input className={`align-middle flex-grow bg-transparent w-max ${isMode ? 'text-ligh-grayish-blue placeholder:text-ligh-grayish-blue' : 'text-very-dark-blue  placeholder:text-very-dark-desaturated-blue'}`} placeholder='Create a new Todo..' onChange={(e) => setTitle(e.target.value)} value={title}></input>
        <button className="h-10 w-10 flex items-center justify-center ml-auto" type="submit" onClick={handleSubmit}> 
          <svg className="h-2 w-3" xmlns="http://www.w3.org/2000/svg" transform="scale(2)" width="32" height="32"><path fill="none" stroke="rgba(87, 93, 115, 0.4)" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>
        </button>
      </form>
    </div>
  )
}

export default CreateTodo