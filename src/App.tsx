// React import is not required with the automatic JSX runtime
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CMSProvider } from './contexts/CMSContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import AlbumDetail from './pages/AlbumDetail';
import Contact from './pages/Contact';
import Weddings from './pages/Weddings';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

function App() {
  return (
    <CMSProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <Layout>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:albumId" element={<AlbumDetail />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Hidden routes (not in navigation) */}
            <Route path="/weddings" element={<Weddings />} />
            <Route path="/weddings/:albumId" element={<AlbumDetail />} />
            
            {/* Admin routes */}
            <Route path="/admin" element={<Admin />} />
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </CMSProvider>
  );
}

export default App;