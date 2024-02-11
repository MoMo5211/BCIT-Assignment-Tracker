import React, { useState } from 'react';
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

type HeaderProps = {
  onAddTodo: (task: string) => void;
}


export function Header({onAddTodo}:HeaderProps) {

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddTodo(inputValue);
    setInputValue("")
  };
  

  const isInputEmpty = !inputValue.trim();

  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleSubmit}>
        <input
          placeholder="Add a new assignment"
          type="text"
          className='ass-input'
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          type='submit'
          disabled={isInputEmpty}
          className={isInputEmpty ? styles.buttonDisabled : 'ass-btn'}
        >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
