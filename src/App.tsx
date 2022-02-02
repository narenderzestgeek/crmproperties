import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './app/component/Navbar'
import Loader from './app/component/Loder';
import { useSelector } from 'react-redux';


const HomePage = React.lazy(() => import('./app/component/HomePage'));
// const {Navbar} =  React.lazy(() => import('./app/component/Navbar'));
const LoginComponent = React.lazy(() => import('./app/component/LoginComponent'));
const Dashboard = React.lazy(() => import('./app/component/Dashboard'));

// import DashboardHOC from './app/component/Dashboard/DashboardContainer';

function App() {

  
  return (
    <div className="App">
      <Suspense fallback={<Loader/>}>
         {/* <Navbar />  */}
        <Router>
          <Routes>
            <Route path='/' element={ <HomePage/> } />
            <Route path='/login' element={ <LoginComponent/> }/>
            <Route path='/dashboard' element={ <Dashboard/> }/>
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}


export default App;