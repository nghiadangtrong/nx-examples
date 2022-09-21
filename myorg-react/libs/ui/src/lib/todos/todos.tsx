import styles from './todos.module.css';
import { Todo } from '@myorg-react/data';

/* eslint-disable-next-line */
export interface TodosProps {
  todos: Todo[]
}

export function Todos(props: TodosProps) {
  return (
    <ul className={styles['container']}>
      {props.todos.map((t) => (
        <li className={'todo'}>{t.title}</li>
      ))}
    </ul>
  );
}

export default Todos;
