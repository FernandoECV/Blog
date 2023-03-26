// importação de biblioteca para o uso de rotas 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/Home";
import PostsPage from "./pages/Posts";
import CommentsPage from "./pages/Comments";
import UsersPage from "./pages/Users";
import DetailUserPage from "./pages/DetailUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/posts",
    element: <PostsPage/>,
  },
  {
    path: "/comments/:postId",
    element: <CommentsPage/>,
  },
  {
    path: "/users",
    element: <UsersPage/>,
  },
  {
    path: "/detail-user/:userId",
    element: <DetailUserPage/>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;