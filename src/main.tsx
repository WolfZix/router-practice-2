import "./index.css";
import HomePage from "./pages/HomePage";
import ProfilesPage from "./pages/ProfilesPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <NotFoundPage /> },
  {
    path: "/profiles",
    element: <ProfilesPage />,
    children: [{ path: "/profiles:profileId", element: <ProfilePage /> }],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
