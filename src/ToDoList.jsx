import ToDo from './ToDo';

function ToDoList({list, toggle}) {
  return (
    <div>
    	{list.map((todo, index) =>
        <ToDo key={index} divId={index} todo={todo} toggle={toggle}/>)}
    </div>
  );
}

export default ToDoList;