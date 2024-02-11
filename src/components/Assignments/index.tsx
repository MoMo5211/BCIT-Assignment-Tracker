import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { Todo } from "../../App";

type AssignmentsProps = {
  todos: Todo[];
  onToggleComplete: (id: string) => void;
  onHandleDelete:(id: string) => void;
};

export function Assignments({todos, onToggleComplete, onHandleDelete}: AssignmentsProps) {

  const completedCount = todos.filter(todo => todo.completed).length;


  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{todos.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completedCount} of {todos.length}</span>
        </div>
      </header>

      <div className={styles.list}>
      {todos.map(todo => (
          <Assignment 
          key={todo.id} {...todo} 
          id={todo.id}
          task={todo.task}
          completed={todo.completed}
          onToggleComplete={onToggleComplete}     
          onHandleDelete = {onHandleDelete} 
          />
        ))}
      </div>
    </section>
  );
}
