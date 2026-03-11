// router.jsx
import { createBrowserRouter } from "react-router-dom";
import { Root } from "./components/Root";
import { Overview } from "./pages/Overview";

// Only include Overview for now to avoid errors
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Overview /> },
      
      // { path: "services", element: <Services /> },
      // { path: "doctors", element: <Doctors /> },
      // { path: "diagnosis", element: <Diagnosis /> },
    ],
  },
]);