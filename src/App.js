import React, { useReducer } from 'react';
import './App.css';
import AppRouter from './routers/AppRouter';

import  ExpensesContext from './contexts/expenses-context'
import  expensesReducer from './reducers/expensesReducer';

function App() {

  const [ expenses, expensesDispatcher ] = useReducer(expensesReducer, [])
  


  return (
    <ExpensesContext.Provider value={{ expenses, expensesDispatcher }}>
      <div className="App">
        <AppRouter />
      </div>      
    </ExpensesContext.Provider>
  );
}

export default App;
