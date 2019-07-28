import db from '../models';

export default {
  list: () => db.get('todos').value(),
  retrieve: id =>
    db
      .get('todos')
      .find({ id })
      .value(),
  create: ({ title }) =>
    db
      .get('todos')
      .push({ title })
      .write()
      .value(),
  update: ({ id, title, completed }) =>
    db
      .get('todos')
      .find({ id })
      .assign({ title, completed })
      .write()
      .value(),
  destroy: id =>
    db
      .get('todos')
      .remove({ id })
      .write()
      .value()
};
