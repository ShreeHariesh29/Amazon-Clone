
import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import AddtoCart from './pages/AddtoCart';
import Products from './pages/Products';

import { BrowserRouter, Route, Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addtocart" element={<AddtoCart />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
