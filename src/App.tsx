import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "aos/dist/aos.css";

import './App.css'
import Home from '@/pages/Home';
import About from '@/pages/About';
import Books from '@/pages/Books';
import Products from '@/pages/Products';
import Blog from './pages/Blog';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;