const ListTodo = ({
  todo,
  taskCompleted,
  handleDragStart,
  handleDragOver,
  handleDrop,
  deleteTodo,
  isMode
}) => {
  return (
    <div
      draggable="true"
      onDragStart={(e) => handleDragStart(e, todo)}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e, todo)}
      className={`flex flex-row ${todo.completed ? 'text-slate-500' : isMode ? 'text-light-very-light-gray':'text-very-dark-blue' } ${todo.completed ? 'line-through' : 'null'} items-center py-4 px-4`}
    >
      <button onClick={() => taskCompleted(todo.id)} className={`w-6 h-6 flex items-center justify-center ${todo.completed ? 'bg-gradient-to-r from-very-ligh-blue to-very-ligh-purble' : 'bg-transparent ring-2'} ${isMode ? 'ring-very-dark-grayish-blue' : 'ring-light-very-light-blue'} rounded-full mr-4`}>
        {todo.completed ? <svg  className='h-2 w-3' xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg> : null}
      </button>
      <p>{todo.text}</p>
      <button onClick={() => deleteTodo(todo.id)} className="ml-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="rgba(87, 93, 115, 0.4)" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
      </button>
    </div>
  );
};

export default ListTodo;
