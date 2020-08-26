import React from 'react';
import TodoList from './TodoList';
import createTodo from './newTodo';
import { Link,Route,Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <table>
          <tr>
            <td><Link to="/todos">TODOs</Link></td>
            <td><Link to="/todos/new">Create new Todo</Link></td>
          </tr>
        </table>
        <Route exact path="/todos" component={TodoList} />
        <Route path="/todos/new" component={createTodo} />
        <Route exact path="/" render={() =><Redirect to="/todos" /> } />
      </div>
    </div>
  );
}

export default App;
