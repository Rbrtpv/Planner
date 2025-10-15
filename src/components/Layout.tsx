import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Navbar />
        <section className="page">
          <Outlet /> 
          {/* dinamic content here */}
        </section>
      </main>
    </div>
  );
}

export default Layout;
