import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Loader from './app/component/Loder';


const HomePage = React.lazy(() => import('./app/component/HomePage'));
const NavigationBar =  React.lazy(() => import('./app/component/Navbar'));
const LoginComponent = React.lazy(() => import('./app/component/LoginComponent'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader/>}>
        {/* <NavigationBar /> */}
        <Router>
          <Routes>
            <Route path='/' element={ <HomePage/> } />
            <Route path='/login' element={ <LoginComponent/> }/>
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;