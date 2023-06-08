import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Location from "./pages/Location";
import Error from './pages/Error'
import About from './pages/About'
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/location' element={<Location></Location>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='*' element={<Error></Error>}></Route>
            </Routes>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)