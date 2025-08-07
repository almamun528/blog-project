import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import Layout from "./Pages/Admin-Pages/Layout";
import Dashboard from "./Pages/Admin-Pages/Dashboard";
import AddBlogs from "./Pages/Admin-Pages/AddBlogs";
import ListBlog from "./Pages/Admin-Pages/ListBlog";
import Comment from "./Pages/Admin-Pages/Comment";
import Login from "./components/Admin/Login";

function App() {
  const isLogin = true;
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Blog />} />

        {/* Admin Routes */}
        <Route path="/admin" element={isLogin ? <Layout /> : <Login />}>
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
