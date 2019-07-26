import db from '../models';

export default {
    list: () => db.get('todos').value(),
    retrieve: id =>
        db
            .get('todos')
            .find({ id })
            .value(),
    create: ({ id, title, completed }) =>
        db
            .get('todos')
            .push({ id, title, completed })
            .write(),
    update: ({ id, title, completed }) =>
        db
            .get('todos')
            .find({ id })
            .assign({ title, completed })
            .write(),
    destroy: id =>
        db
            .get('todos')
            .remove({ id })
            .write()
};
