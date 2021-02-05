import React from 'react';
import './App.css';
import Header from './componets/header/header.jsx'
import Card from './componets/card/Card'

function App() {
  return (
     <div className={''}>
       <Header />
       <div className={'wrapper'}>
       <Card/>
       </div>
     </div>
  );
}

export default App;
