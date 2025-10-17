import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SEOHead from './SEOHead';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <>
      <SEOHead />
      <div className="min-h-screen flex flex-col">
        {!isAdminPage && <Header transparent={isHomePage} />}
        <main className={`flex-grow ${isAdminPage ? '' : 'pt-0'}`}>
          {children}
        </main>
        {!isAdminPage && <Footer />}
      </div>
    </>
  );
};

export default Layout;
