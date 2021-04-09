import React, { useContext} from 'react';
import { Link } from 'react-router-dom';

import ExpensesContext from '../contexts/expenses-context';
import ExpensesFilters from '../components/ExpensesFilters';
import ExpensesList from '../components/ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const ExpensesDashboardPage = () => {

  const { expenses } = useContext(ExpensesContext);



  return (
    <div>
        <h1>Expenses Dashboard</h1>
        <Link to="/add">Create Expense</Link> <br />
        <ExpensesSummary /> <br />
        <ExpensesFilters />
        <ExpensesList />
    </div>
  )
}

export default ExpensesDashboardPage
