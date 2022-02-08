import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Products from './pages/Products/Products';
import Navbar from './components/Navbar';
import Cart from './pages/Cart/Cart';
import RequireAuth from './helpers/RequireAuth';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Toaster position="top-right"
          containerStyle={{
            position: 'absolute',
            marginTop: 50,
            zIndex: 0,
          }}
          toastOptions={{ duration: 5000 }} />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/register' exact element={<Register />} />
          <Route path='/products' exact element={<RequireAuth> <Products /> </RequireAuth>} />
          <Route path='/cart' exact element={<RequireAuth> <Cart /> </RequireAuth>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
