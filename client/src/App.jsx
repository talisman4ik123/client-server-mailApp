import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Registration from "./pages/Registration"
import Login from "./pages/Login"
import Inbox from "./pages/Inbox"
import Unread from "./pages/Unread"
import Important from "./pages/Important"
import Sent from "./pages/Sent"
import Bin from "./pages/Bin"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/registration",
    element: <Registration/>
  },
  {
    path: "/inbox",
    element: <Inbox/>
  },
  {
    path: "/unread",
    element: <Unread/>
  },
  {
    path: "/important",
    element: <Important/>
  },
  {
    path: "/sent",
    element: <Sent/>
  },
  {
    path: "/bin",
    element: <Bin/>
  }
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