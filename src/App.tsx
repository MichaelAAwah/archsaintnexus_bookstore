import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Home from '@/pages/Home';
import About from './pages/About';
import Books from './pages/Books';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="/products" element={<Home />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;