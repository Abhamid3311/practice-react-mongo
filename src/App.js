import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AddProducts from './components/AddProducts/AddProducts';
import ManageProducts from './components/ManageProducts/ManageProducts';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/addproduct' element={<AddProducts></AddProducts>}></Route>
        <Route path='/manageproduct' element={<ManageProducts></ManageProducts>}></Route>

      </Routes>
    </div>
  );
}

export default App;
