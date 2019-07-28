import React from 'react';
import { ClipLoader } from 'react-spinners';
import Todo from './Todo';

function Todos({ data }) {
  return (
    <div className="container p-5">
      <h4 className="text-primary mb-3">Todos App</h4>
      {!data && <div className="text-danger">Nothing</div>}
      {data && data.length === 0 && <ClipLoader sizeUnit="px" size={45} color="#123abc" />}
      {data &&
        data.length !== 0 &&
        data.map(todoData => <Todo data={todoData} key={todoData.id} />)}
    </div>
  );
}

export default Todos;
