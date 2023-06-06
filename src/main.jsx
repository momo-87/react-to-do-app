import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from '@/components/TodoApp';
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <TodoApp />
    </Router>
  </React.StrictMode>,
)
