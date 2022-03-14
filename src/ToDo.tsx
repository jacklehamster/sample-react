import {ToDoItem} from "./App"

function ToDo({divId, todo, toggle}:{divId:string, todo:ToDoItem, toggle:Function}) {

  function onToggle() {
    toggle(todo.id);
  }

  return (
    <div>
      <input id={divId} onChange={onToggle} type="checkbox" checked={todo.done}></input>
      <label htmlFor={divId} style={{textDecoration:todo.done?"line-through":""}}>{todo.name}</label>
    </div>
  );
}

export default ToDo;
