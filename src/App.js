import React from 'react';
import './App.css';
import Header from './componets/header/header.jsx'
import MainPage from './pages/main-page/MainPage'
function App() {
  return (
     <div className={''}>
       <Header />
       <div className={'wrapper'}>
       <MainPage/>
       </div>
     </div>
  );
}

export default App;
