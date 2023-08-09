import React from 'react';
import styles from './TodoItem.module.css';
import { useCompletedTodosStore } from '@./store';

type Props = {
  children: React.ReactNode;
  id: number;
  onClick?: () => void;
};

export const TodoItem: React.FC<Props> = ({ children, id, onClick }) => {
  const { completedTodoIds, setCompletedTodo } = useCompletedTodosStore();

  const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.checked) {
      setCompletedTodo(id);
    }
  };

  return (
    <div
      onClick={onClick}
      className={styles.item}
      style={{
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      {children}

      <input
        type="checkbox"
        id={id.toString()}
        name="scales"
        checked={!!completedTodoIds.find((item) => item === id)}
        onChange={handleCheckboxClick}
      />
      <label htmlFor={id.toString()}>complete</label>
    </div>
  );
};
