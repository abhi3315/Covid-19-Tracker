import React from 'react'
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom'
import Header from './Header'
import India from './India'
import World from './World'
import District from './District'
import Footer from './Footer'
import TimeSeries from './TimeSeries'
import NotFound from './NotFound'

function App() {
    return (
        <Router>
            <Header />
            <div className="data-container">
                <Switch>
                    <Router exact path="/">
                        <World />
                    </Router>
                    <Router exact path="/india">
                        <India />
                    </Router>
                    <Router exact path="/indian-district">
                        <District />
                    </Router>
                    <Router exact path="/indian-cases">
                        <TimeSeries />
                    </Router>
                    <Router path="*">
                        <NotFound />
                    </Router>
                </Switch>
            </div>
            <Footer />
        </Router>
    )
}

export default App