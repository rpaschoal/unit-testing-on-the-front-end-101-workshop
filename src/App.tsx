import React from 'react';
import logo from './logo.svg';
import './App.css';

import TodoList from './components/Todo/Todo';

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
