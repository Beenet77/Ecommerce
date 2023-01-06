import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import Dashboard from './pages/dashboard/Dashboard';
import Error from './pages/error/Error';
import Login from './pages/login/Login';
import ProductDetail from './pages/product-detail/ProductDetail';
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
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
