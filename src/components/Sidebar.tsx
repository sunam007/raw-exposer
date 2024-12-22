// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <aside className="p-10 w-[20.9%] fixed bottom-0 top-0 left-0 overflow-x-hidden z-[1001] bg-[#101010] border-none border-r border-r-[rgba(255,255,255,0.03)] transition-all duration-500 scrollbar-hidden">
//       <nav className="flex flex-col p-4 space-y-4">
//         <Link to="/" className="hover:text-gray-300">Home</Link>
//         <Link to="/about" className="hover:text-gray-300">About</Link>
//         <Link to="/gallery" className="hover:text-gray-300">Gallery</Link>
//         <Link to="/contact" className="hover:text-gray-300">Contact</Link>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;

// src/components/Sidebar.tsx
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="w-[21%] bg-black text-gray-200 fixed h-full flex flex-col justify-between px-6 py-8">
            <div>
                <h1 className="text-2xl font-bold text-red-500">JOPHO</h1>
                <p className="text-sm font-light">PHOTO STUDIO</p>
                <nav className="mt-12">
                    <ul className="space-y-6">
                        {["Home", "About", "Services", "Gallery", "Blog", "Contact"].map((item) => (
                            <li key={item}>
                                <Link
                                    to={`/${item.toLowerCase()}`}
                                    className="text-gray-400 hover:text-red-500 transition"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-red-500 transition">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-red-500 transition">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-red-500 transition">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-red-500 transition">
                    <i className="fab fa-pinterest"></i>
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;

