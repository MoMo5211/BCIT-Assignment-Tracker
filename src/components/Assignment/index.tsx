import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { FaRegCircle, FaCheckCircle } from 'react-icons/fa';


type AssignmentProps = {
  id: string; 
  task: string;
  completed: boolean;
  onToggleComplete: (id: string) => void; 
  onHandleDelete:(id: string) => void;
};

export function Assignment({ id, task, completed, onToggleComplete, onHandleDelete }:AssignmentProps ) {
    // Event handler for click event
    const handleToggleComplete = () => {
      onToggleComplete(id);
    }; 

    const handleDelete = () => {
      onHandleDelete(id);
    }

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={handleToggleComplete}>
      {completed ? <FaCheckCircle color="#5859BD" /> : <FaRegCircle color="#4EA8DE" />}
      </button>

      <p className={completed ? styles.textCompleted : ""}>{task}</p>

      <button className={styles.deleteButton} onClick={handleDelete}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
