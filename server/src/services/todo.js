import thinid from 'thinid';
import db from '../models';

const findTodo = id =>
  db
    .get('todos')
    .find({ id })
    .value();

export default {
  list: () => db.get('todos').value(),
  retrieve: id => findTodo(id),
  create: ({ title }) => {
    const id = thinid();
    db.get('todos')
      .push({ id, title, completed: false })
      .write();
    return findTodo(id);
  },
  update: ({ id, title, completed }) => {
    db.get('todos')
      .find({ id })
      .assign({ title, completed })
      .write();
    return findTodo(id);
  },
  destroy: id => {
    const removedTodo = findTodo(id);
    db.get('todos')
      .remove({ id })
      .write();
    return removedTodo;
  }
};
