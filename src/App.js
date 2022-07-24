
import './App.css';
import { ItemListContainer } from './components/Item/ItemListContainer';
import { NavBar } from './components/Navbar/NavBar';
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Cart } from './components/Cart/Cart';


function App() {
  return (
    <BrowserRouter>
      <NavBar/> {/*De esta forma Navbar se vera en todas las rutas   */}
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='category/:category' element={<ItemListContainer/>} />
        <Route path='item/:id' element={<ItemDetailContainer/>} />
        <Route path='cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
