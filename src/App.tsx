import Todos from './components/Todos';
import Todo from './models/todo';

import './App.css';
import NewTodo from './components/newTodo';

function App() {
  const todos = [new Todo('Learn React'), new Todo('Learn React')];

  const addTodoHandler = (todoText: string) => {};

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
