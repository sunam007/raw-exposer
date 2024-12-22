import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ background: '#333', color: '#fff', padding: '10px 20px' }}>
      <nav>
        <Link to="/" style={{ color: '#fff', marginRight: '15px' }}>Home</Link>
        <Link to="/about" style={{ color: '#fff' }}>About</Link>
      </nav>
    </header>
  );
}

export default Header;
