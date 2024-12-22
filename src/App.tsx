import { Route, Routes } from 'react-router-dom';
import MainLayout from './Layouts/MainLayouts';
import Loading from './components/Loading';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import NotFound from './pages/NotFound';

const App = () => {
  const isLoading = true; // Replace with your actual loading state

  return (
    <>
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;