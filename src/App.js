import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import MainPage from './pages/mainPage';
import ProductsPage from './pages/productsPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
