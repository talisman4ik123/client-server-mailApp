import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Registration from "./pages/Registration"
import Login from "./pages/Login"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/registration",
    element: <Registration/>
  },
  // {
  //   path: "/login",
  //   element: <Login/>
  // },
  // {
  //   path: "/users",
  //   element: <Users/>
  // },
  // {
  //   path: "*",
  //   element: <NotFound/>
  // }
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App