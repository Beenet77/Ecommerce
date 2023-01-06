import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import AboutUs from './pages/about-us/AboutUs';
import Categories from './pages/categories/Categories';
import Dashboard from './pages/dashboard/Dashboard';
import Error from './pages/error/Error';
import Login from './pages/login/Login';
import ProductDetail from './pages/product-detail/ProductDetail';
import ProductByCategory from './pages/products-by-category/ProductByCategory';
import Signup from './pages/signup/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<Error />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/products-by-category" element={<ProductByCategory />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
