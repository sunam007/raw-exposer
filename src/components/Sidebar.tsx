import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside id="jopho-aside">
            <div className="jopho-logo">
                <Link to="/">
                    <img src="/src/assets/logo/rawexp.png" alt="logo" />
                </Link>
            </div>
            <nav className="jopho-main-menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div className="jopho-footer">
                <ul>
                    <li><a href="#"><i className="ti-facebook"></i></a></li>
                    <li><a href="#"><i className="ti-twitter"></i></a></li>
                    <li><a href="#"><i className="ti-instagram"></i></a></li>
                    <li><a href="#"><i className="ti-pinterest"></i></a></li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;

