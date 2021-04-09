import React from 'react'
import { BrowserRouter as Router,  Switch, Route } from 'react-router-dom';
import ExpensesDashboardPage from '../components/ExpensesDashboardPage';


import Header from '../components/Header';
import PageNotFound from '../components/PageNotFound'

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Switch>
        <Route exact path="/" component={ExpensesDashboardPage} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default AppRouter
