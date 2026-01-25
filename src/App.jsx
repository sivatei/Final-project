import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import Header from './components/Header'
import Banner from './components/Banner'
import Cuisine from './components/Cuisine'
import Khmer from './components/Khmer'
import Login from './components/Login'
import DetailA from './components/DetailA'
import PList from './components/PList'
import Footer from './components/Footer'
import Recipe from './components/Recipe'
import Subscription from './components/Subscription';
import Setting from './components/Setting';
import Cook from './components/Cook';
import Payment from './components/Payment';






function App() {
  const [count, setCount]= useState(0);
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<><Banner /><Cuisine /><PList/><Footer/></>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/khmer" element={<Khmer/>} />
        <Route path='/detail/:id' element={<DetailA/>}/>
        <Route path="/recipes" element={<Recipe/>}/>
        <Route path="/setting" element={<Setting/>}/>
        <Route path="/plan" element={<Subscription/>}/>
        <Route path="/amok" element={<Cook/>}/>
        <Route path="/payment" element={<Payment/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App

