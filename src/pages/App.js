import SpecificUserType from './SpecificUserType'
import AllUserType from './AllUserType'
import Home from './Home';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

const App = () => {
  return (
    <Router>
        <Routes>    
            <Route 
                path='/' 
                exact 
                element={<Home />} />
            <Route 
                path='/alltype' 
                exact 
                element={<AllUserType />} />
            <Route 
                path='/type1' 
                exact 
                element={<SpecificUserType />} />
        </Routes>
    </Router>
  )
}

export default App