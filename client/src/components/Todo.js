import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo({ data }) {
  return (
    <div className="d-flex border-bottom mb-3">
      <div className="w-100">
        <p className="text-info h4">{data.title}</p>
        <p className={data.completed ? 'text-success' : 'text-danger'}>
          {data.completed.toString()}
        </p>
      </div>
    </div>
  );
}

export default Todo;
