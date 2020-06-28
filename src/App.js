import React from 'react'
import Header from './Header'
import India from './India'
import World from './World'
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom'

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Router exact path="/">
                    <India />
                </Router>
                <Router path="/world">
                    <World />
                </Router>
            </Switch>
        </Router>
    )
}

export default App