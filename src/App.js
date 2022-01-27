import React from "react"
import DropArea from "./components/DropArea";
import DisplayArea from "./components/DisplayArea";
import Nav from './components/Nav'
import Form from './components/Form'
import Button from './components/Button'
//eslint-disable-next-line
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

function App() {
  return (
      <Router>
        <div className="App">
            <Nav />
            <Switch>
              <Route path='/' exact component={DropArea} />
              <Route path='/login' component={Form} />
            </Switch>
            <Button />
            <DisplayArea />
            {/* <DropArea route="mark"/> */}
            {/* <Footer/> */}
        </div>
    </Router>
  );
}

export default App;
