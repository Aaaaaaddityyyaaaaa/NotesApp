import { createBrowserRouter, RouterProvider ,createRoutesFromElements , Route} from "react-router-dom";
import Home from "./pages/Home";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";

export default function App()
{
  const browserRouter= createBrowserRouter(createRoutesFromElements(<>
  <Route path = "/" element={<Home/> } />
  <Route path = "/create" element={<CreatePage/>}/>
  <Route path= "/edit/:id" element={<EditPage/>}/>
  </>
)) ; 
  return<RouterProvider router ={browserRouter}/>
}