import './App.css';
import { ItemListContainer } from './components/Item/ItemListContainer';
import { NavBar } from './components/Navbar/NavBar';
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Cart } from './components/Cart/Cart';
import Provider from './context/cartContext';
import { UserForm } from './components/Form/UserForm';


function App() {
  return (

    // eslint-disable-next-line react/jsx-no-undef
    <Provider>
      <BrowserRouter>
        <NavBar/> 
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='category/:category' element={<ItemListContainer/>} />
          <Route path='item/:id' element={<ItemDetailContainer/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='userForm' element={<UserForm/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
