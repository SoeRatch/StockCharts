import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';


const App = () => (
  <div>
    <Layout>
      <Switch>
  
        <Route exact path="/"  component={HomePage}/>
           
    
      </Switch>
    </Layout>
  </div>
);

export default App;
