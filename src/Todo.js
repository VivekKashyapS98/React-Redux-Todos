import React from 'react';

const Todo = ({task, remove}) => (
    <li>
        {task.title}
        <input type="button" value="X" onClick={() => remove(task._id)} />
    </li>
);

export default Todo;