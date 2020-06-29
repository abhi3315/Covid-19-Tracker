import React from 'react'
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom'
import Header from './Header'
import India from './India'
import World from './World'

function App() {
    return (
        <Router>
            <Header />
            <div className="data-container">
                <Switch>
                    <Router exact path="/">
                        <World />
                    </Router>
                    <Router path="/india">
                        <India />
                    </Router>
                </Switch>
            </div>
        </Router>
    )
}

export default App