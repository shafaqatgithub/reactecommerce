
import './App.css';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import ProductCategory from './pages/ProductCategory';
import SearchPage from './pages/SearchPage';
import SingleProduct from './pages/SingleProduct';
import store from "./store/store";
import {Provider} from "react-redux"


function App() {
  return (
    <>
     <Provider store = {store}>
     <BrowserRouter>
      <Header/>
      <Routes>
     
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
     </Provider>
    </>
  );
}

export default App;
