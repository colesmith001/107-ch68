import {BrowserRouter, Routes, Route} from "react-router";

// alphebetical order for components
import About from "./pages/about";
import Admin from "./pages/Admin"
import Catalog from './pages/Catalog';
import Contact from "./pages/contact";
import Home from "./pages/Home";


import Footer from './components/Footer';
import Navbar from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <BrowserRouter>       
      <Navbar/>

      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>} />
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/catalog"  element = {<Catalog/>}/>
        <Route path = "/admin"  element = {<Admin/>}/>
        <Route path = "*" element = {<h1>404 Not Found</h1>} />
      </Routes>

      
      <Footer/>
    </BrowserRouter>   
  )
}
export default App
