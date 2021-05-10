import './App.scss'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Hero from './components/hero.js'
import NavigationBar from './components/NavigationBar.js'

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
              <NavigationBar />
              <Hero />
              {/*<Link to="/first-router">
                <Button variant="outline-success">Lovely succes button</Button>
              </Link>*/}
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
