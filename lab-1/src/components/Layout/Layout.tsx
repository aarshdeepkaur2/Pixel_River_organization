import { Outlet } from "react-router";
import { Nav } from "./nav/Nav";
import Footer from "./footer/Footer";

export function Layout() {
  return (
    <div className="p-8 flex flex-col min-h-screen bg-stone-200">
      <Nav />
      <main className="flex-grow p-4">
        <Outlet />
      </main>


      <Footer />
    </div>
  );
}
