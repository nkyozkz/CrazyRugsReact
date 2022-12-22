import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from '../Context/CartContext';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import CheckOut from './CheckOut/CheckOut';
import Error404 from './Error/Error404';



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar/>
            <Routes>
                    <Route path='/' element={<ItemListContainer/>} />
                    <Route path='/Item/:id' element={<ItemDetailContainer/>}/>
                    <Route path='/category/:category' element={<ItemListContainer/>}/>
                    <Route path='/Cart' element={<Cart/>}/>
                    <Route path='/checkout' element={<CheckOut/>}/>
                    <Route path='*' element={<Error404/>}/>
            </Routes>
            <Footer/>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
