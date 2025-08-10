import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import Layout from "./Pages/Admin-Pages/Layout";
import Dashboard from "./Pages/Admin-Pages/Dashboard";
import AddBlogs from "./Pages/Admin-Pages/AddBlogs";
import ListBlog from "./Pages/Admin-Pages/ListBlog";
import Comment from "./Pages/Admin-Pages/Comment";
import Login from "./components/Admin/Login";
import "quill/dist/quill.snow.css"; //import it for make controlled message box area
import { Toaster } from "react-hot-toast";
import { useAppContext } from "./Context/AppContext";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  const { token } = useAppContext();

  return (
    <section>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="*" element={<ErrorPage />} />
        {/* Admin Routes */}
        <Route path="/admin" element={token ? <Layout /> : <Login />}>
          <Route index element={<Dashboard />} />
          <Route path="addBlog" element={<AddBlogs />} />
          <Route path="listBlog" element={<ListBlog />} />
          <Route path="comments" element={<Comment />} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
