import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';
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
          <Route path='/' exact element={<RequireAuth isPublic> <Home /> </RequireAuth>} />
          <Route path='/login' exact element={<RequireAuth isPublic> <Login /> </RequireAuth>} />
          <Route path='/register' exact element={<RequireAuth isPublic> <Register /> </RequireAuth>} />
          <Route path='/products' exact element={<RequireAuth isPrivate> <Products /> </RequireAuth>} />
          <Route path='/cart' exact element={<RequireAuth isPrivate> <Cart /> </RequireAuth>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
