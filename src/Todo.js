import React from 'react';

const Todo = ({task, remove}) => (
    <li>
        {task.name}
        <input type="button" value="X" onClick={() => remove(task.id)} />
    </li>
);

export default Todo;