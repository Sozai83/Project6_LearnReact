import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Todo } from './Todo';
import { TodoType } from './types/todo'
import { Text } from './text'
import { UserProfile } from './UserProfile';

const user = {
  name: 'Shiori',
  hobbies: ['Soccer', 'Cooking']
}


function App() {

  const [todos, setTodos] = useState<any>([]);

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        res.data.map((todo) => todo.userId)
        setTodos(res.data)
      })
      .catch(err => console.error(err))
  }

  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="18px"></Text>
      <button onClick={onClickFetchData}>Data</button>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed} />
      )}
    </div>
  );
}

export default App;
