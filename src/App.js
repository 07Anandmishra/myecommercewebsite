import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import Contact from './Component/Contact/Contact';
import View from './Component/ProductView/ViewSingleproduct';
import Cart from './Component/cart/Cart';
import Footer from './Component/Footer/Footer';

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/view/:id' element={<View />} />
    <Route path='/cart' element={<Cart />}/>
   </Routes>
   <Footer />
   </BrowserRouter>
  
   </>
  );
}

export default App;
