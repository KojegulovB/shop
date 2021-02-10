import React from 'react';
import './App.css';
import Header from './componets/header/header.jsx'
import BasketPage from './pages/main-page/backet-page/backetPage';
import MainPage from './pages/main-page/MainPage'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
function App() {
  return (
    <Router>
     <div className={''}>
       <Header />
       <Switch>
         <Route exact path="/">
           <MainPage/>
         </Route>
         <Route exact path="/basket">
           <BasketPage/>
         </Route>
         <Route exact path="/category">
           <h1>Category</h1>
         </Route>
         <Route exact path="*">
          <h1>404 page not found</h1>
         </Route>
          {/* <Redirect to={'/'}/> */}
       </Switch>
     </div>
    </Router>
  );
}

export default App;
