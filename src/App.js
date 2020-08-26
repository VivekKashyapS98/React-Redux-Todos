import React from 'react';
import TodoList from './TodoList';
import { Link,Route,Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
          <header>
            <Link to="/todos">TODOs</Link><br />
            <Link to="/todos/new">Create new Todo</Link>
          </header>
        <Route path="/todos" component={TodoList} />
        <Route exact path="/" render={() =><Redirect to="/todos" /> } />
      </div>
    </div>
  );
}

export default App;
