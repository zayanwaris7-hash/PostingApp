import {Outlet} from 'react-router-dom';
import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import { useSelector } from 'react-redux';

function Layout() {
    
  return (
    <>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout