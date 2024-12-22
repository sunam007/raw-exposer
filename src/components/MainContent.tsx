// src/components/MainContent.tsx
import { Outlet } from "react-router-dom";

const MainContent = () => {
  return (
    <main className="ml-[21%] w-[79%] h-screen overflow-y-scroll">
      <Outlet />
    </main>
  );
};

export default MainContent;
