import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from "./Pages/Home/Home";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="blogdetails" element={<BlogDetails />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
