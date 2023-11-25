
import  {BrowserRouter as Router, Route, Link, Switch}  from 'react-router-dom';
import CustomerDetails from './CustomerDetails';
import UpdateCustomer from './UpdateCustomer';
import CreateCustomer from './CreateCustomer';
import List from './list';
import './App.css';


function App() {
 

  return (
<Router>

  <div>
    <nav>
      <ul>
        <li>
          <Link to ="/">Home</Link>
        </li>
        <li>
         <link Link to ="/create">Create Customer</link>
        </li>
      </ul>
    </nav>

    <hr />
<Switch>
  <route path ="/create" components={CreateCustomer} />
  <route path ="/details/:customerId" components={CustomerDetails} />
  <route path ="/update/:customerId" components={UpdateCustomer} />
  <route path ="/" components={List} />
</Switch>

    
  </div>
</Router>
  );
}
  
export default App;
