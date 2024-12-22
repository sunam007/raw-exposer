import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <Header />
      <div style={{ minHeight: '80vh', padding: '20px' }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
