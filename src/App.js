import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router'
import CustomersPage from './components/CustomersPage'
import HistoryPage from './components/HistoryPage'
import TransactionForm from './components/TransactionForm'
import './App.css'

class App extends PureComponent {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={()=><CustomersPage/>} />
          <Route exact path="/history" component={()=><HistoryPage/>} />
          <Route exact path="/transfer" component={()=><TransactionForm/>} />
        </Switch>
      </div>
    )
  }
}

export default App;
