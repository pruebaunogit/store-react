
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./views/Cart";
import Details from "./views/Details";
import Home from "./views/Home";



function App() {

  const rutas = createBrowserRouter([
    {path:"/", element: <Home/>},
    {path:"/home", element: <Home/>},
    {path:"/details/:id", element: <Details/>},
    {path:"/cart", element: <Cart/>},
  ]);

  return (
    <>  
      <RouterProvider router={rutas} />
    </>
  );
}

export default App;
