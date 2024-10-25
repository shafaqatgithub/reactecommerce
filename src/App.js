
import './App.css';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import CartPage from './pages/CartPage';
import ProductCategory from './pages/ProductCategory';
import SearchPage from './pages/SearchPage';
import SingleProduct from './pages/SingleProduct';
import store from "./store/store";
import {Provider} from "react-redux";
import Footer from './components/Footer';
import Product from './components/Product';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <>
     <Provider store = {store}>
     <BrowserRouter>
      <Header/>
      <Sidebar />
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<SingleProduct/>}/>
        <Route path="/category/:category" element={<ProductCategory/>} />
        <Route path="/cart" element={<CartPage/>} />

        <Route path="/search/:searchTerm" element={<SearchPage/>} />

        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        
      </Routes>

      <Footer/>
      
      </BrowserRouter>
     </Provider>
    </>
  );
}

export default App;
