import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

// Initialize lowdb.
const adapters = new FileSync(`${__dirname}/db.json`);
const db = low(adapters);

// Set default value.
db.defaults({ todos: [] }).write();

export default db;
