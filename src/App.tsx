import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

uuidv4();

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

   useEffect(() => {
    console.log(todos); // This will log the updated state after changes
  }, [todos]); // Only re-run the effect if todos changes

  const addTodo = (task:string) => {
    if (task.trim().length === 0) {
      return; // prevent adding empty todos
    }   
    const newTodo = { id: uuidv4(), task: task, completed:false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id:string) => {
    setTodos(todos => todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDelete = (id:string) =>{
    setTodos(todos => todos.filter(todo => todo.id !==id));
  }

  return (
    <>
      <Header onAddTodo={addTodo} />
      <Assignments todos={todos} onToggleComplete={toggleComplete} onHandleDelete={handleDelete} /> 
    </>
  );
}

export default App;

