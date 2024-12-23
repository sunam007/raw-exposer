import { Link } from "react-router-dom";
import { Icon } from '@iconify-icon/react';

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
                    <li>
                        <a href="#">
                            <Icon icon="iconoir:facebook" width="24" height="24" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <Icon icon="hugeicons:instagram" width="24" height="24" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Icon icon="si:youtube-line" width="24" height="24" />
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;

