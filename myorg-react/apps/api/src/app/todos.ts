import { Express } from 'express';
import { Todo} from '@myorg-react/data';

const todos: Todo[] = [
  { title: 'Todo 1' },
  { title: 'Todo 2' }
];

export function addTodoRouter(app: Express) {
  app.get('/api/todos', (req, res) => res.send(todos));
  app.post('/api/todos', (req, res) => {
    const newTodo = {
      title: `New todo ${Math.floor(Math.random() * 1000)}`
    }

    todos.push(newTodo);
    res.send(newTodo);
  })
}