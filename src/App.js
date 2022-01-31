import './App.css';
import  Header  from './components/Header';
import  Footer  from './components/Footer';
import  Home    from './components/Home';
import  About   from './components/About';
import  Product from './components/Product';
import  Contact from './components/Contact';
import Checkout  from './components/Checkout'
import Cart     from './components/Cart';
import ProductDetail from './components/ProductDetail';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/Home" element={ <Home/> } />
        <Route exact path="/product" element={ <Product/> } />
        <Route exact path="product/:id" element={ <ProductDetail/> } />
        <Route exact path="/cart" element={ <Cart/> } />
        <Route exact path="/checkout" element={ <Checkout/> } />
        <Route exact path="/about" element={ <About/> } />
        <Route exact path="/contact" element={ <Contact/> } />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;