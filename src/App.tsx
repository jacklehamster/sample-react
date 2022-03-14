import React from 'react';
import ToDoList from './ToDoList';
import AddButton from './AddButton';
import logo from './logo.svg';
import './App.css';
import { v4 as uuid } from 'uuid';
import ToDo from './ToDo';

export interface ToDoItem {
  id: string,
  name: string,
  done?: boolean,
}

class App extends React.Component<{}, { list: ToDoItem[] }> {
  constructor(props:any) {
    super(props);

    const list:ToDoItem[] = [
    ];

    this.state = {
      list,
    };

    this.addToDo = this.addToDo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.cleanComplete = this.cleanComplete.bind(this);
  }

  addToDo(todo:string) {
    this.setState(({list}:{list:ToDoItem[]}) => ({
      list: [...list, {
        id: uuid(),
        name:todo,
        done:false,
      }],
    }));
  }
  
  toggleTodo(idCompleted:string) {
    this.setState(({list}:{list:ToDoItem[]}) => ({
      list: list.map(({id, name, done}) => {
        return {id, name, done:id===idCompleted?!done:done};
      }),
    }));
  }

  cleanComplete() {
    this.setState(({list}) => ({
      list: list.filter(({done})=>!done)
    }));
  }

  render() {
    return (
      <div className="App">
        <img src={logo} style={{width:50}}></img>
        <div>ToDo list:</div>
        <ToDoList list={this.state.list} toggle={this.toggleTodo} />
        <hr/>
        <div style={{display:"flex", flexDirection:"column", width:200}}>
          <button onClick={this.cleanComplete}>Clean</button>
          <AddButton onClick={this.addToDo} />          
        </div>
      </div>
    );  
  }  
}

export default App;
