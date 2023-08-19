import './App.css';
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import ViewEmployeeComponent from './Components/ViewEmployeeComponent'
import ListEmployeeComponent from './Components/ListEmployeeComponent'
import CreateEmployeeComponent from './Components/CreateEmployeeComponent'

import {BrowserRouter as Router, Route,Link, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
     <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees"  component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id"  component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id"  component = {ViewEmployeeComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
