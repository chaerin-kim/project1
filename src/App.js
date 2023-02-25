import React, { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import './App.css';
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import TodoInsert from './components/TodoInsert';

const nextId = 4;

const App = () => {
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {                                                                                                                                                                                                
      id: 1,
      text: "할일 1",
      checked: true
    },
    {
      id: 2,
      text: "할일 2",
      checked: false
    },
    {
      id: 3,
      text: "할일 3",
      checked: true
    }
  ]);

  const onInsertToggle = () => {
    setInsertToggle(prev => !prev); //prev 무슨뜻?
  };

  const onInsertTodo = (text ) => {
    if (text == "") {
      return alert('할일을 입력해주세요.')}
      else {
        const todo = {
          id: nextId,
          text,
          checked: false
        
        };
        setTodos(todo => todos.concat(todo)); // concat: 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 '새 배열'을 반환
        nextId++;
      }
    };
 
  return (
    <Template todoLength={todos.length}>
      <TodoList todos={todos} />
      <div className='add-todo-button' onClick={onInsertToggle}><MdAddCircle /></div>
      {insertToggle && <TodoInsert onInsertToggle={onInsertToggle} onInsertTodo={onInsertTodo} />}
    </Template>
  );
};

export default App;
