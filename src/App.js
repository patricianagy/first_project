import logo from './logo.svg'
import './App.scss'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/first-router">
          <First />
        </Route>
        <Route exact path="/">
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <Link to="/first-router">
                <Button variant="outline-success">Lovely succes button</Button>
              </Link>
            </header>
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

function First() {
  return (
    <div>
      <h3>🍉</h3>
      <Link to="/">
        <Button variant="outline-success">Back</Button>
      </Link>
    </div>
  )
}

export default App
