import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Property from "./Pages/Property";
import MainLayout from "./Layout/MainLayout";
import LandingPage from "./Pages/LandingPage";
import PropertyDetails from "./Pages/PropertyDetails";
import Favorites from "./Pages/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "list", element: <Property /> },
      { path: "property/:id", element: <PropertyDetails /> },
      { path: "favorites", element: <Favorites /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
