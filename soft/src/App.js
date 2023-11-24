
import  {BrowserRouter,Routes,Route}  from 'react-router-dom';
import { useState } from 'react';
import NewCustomer from './NewCustomer';
import List from './list';
import './App.css';
import { useState } from 'react';

function App() {
 

  return (
    <div className="App">
      <header className="App-header">
        List 
</header>

<Routes
path='/'>
       <Route
        path='./NewCustomer.js'   element={<NewCustomer />}>
       </Route>
   
    
       <Route
        path='./list.js' element ={<List />}>
       </Route>
      
  </Routes>
  </div>
  );
}
  
export default App;
