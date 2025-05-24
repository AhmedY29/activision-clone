import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "../pages/About";
import Careers from "../pages/Careers";
import Home from "../pages/Home";
import Support from "../pages/Support";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div className="flex grow flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/careers", element: <Careers /> },
      { path: "/support", element: <Support /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
