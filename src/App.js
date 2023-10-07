import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Layout from './Components/Layout/Layout';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';


import { RouterProvider, createHashRouter } from 'react-router-dom';
import { useState } from 'react';
import NotFound from './Components/Not-Found/NotFound';

let routers= createHashRouter([

  {path:'/', element:<Layout/>,children:[
    {path:'About',element:<About/>},
    {path:'Contact',element:<Contact/>},
    {path:'Portfolio',element:<Portfolio/>},
    {path:'*',element:<NotFound/>},
    {index:true,element:<Home/>}


  ]}
])





function App() {
  return (
    <div className="App">
   
     
    
      <RouterProvider router={routers}></RouterProvider>  
      
      {/* 3shan yfhm eno hyakhod el router el hya 
       el paths el fo2 ysh8lha bb3tlo prps gowaha router */}

    </div>


  );
}

export default App;
