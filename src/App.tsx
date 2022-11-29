import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
import Grid from '@material-ui/core/Grid';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (

    <>
    <Router>
    <Navbar />
      <Routes>
       <Route path='/home' element={<Home />}/>
       <Route path='/' element={<Login/>}/>
       <Route path='/Login' element={<Login />}/>

       </Routes>
      <Footer />/
    </Router>

    </>


  );
}
export default App;
