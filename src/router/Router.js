import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../auth/Login";
import { store } from "../redux/store";
import Home from "../pages/home/Home";

console.log(store.getState().user.loginStatus);
console.log(store.getState().user.token);

const authRouters = {
  path: "",
  children: [{ path: "/login", element: <Login /> }],
};

const privateRouters = {
  path: "",
  loader: () => {
    const { user } = store.getState();
    if (!user.loginStatus) {
      return redirect("/login");
    }
    return null;
  },
  children: [
    { path: "/", element: <Home /> },
    { path: "/blogs", element: <div>Blogs</div> },
  ],
};
const a = 1;

const router = createBrowserRouter([{ ...privateRouters }, { ...authRouters }]);

export default router;
