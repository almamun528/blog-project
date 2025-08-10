import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [input, setInput] = useState("");
  // fetch blogs
  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/api/read/blog");
      data?.success ? setBlogs(data?.blogs) : toast.error(data?.message);
    } catch (error) {
      toast.error(error?.message);
    }
  };
  
  // render all blogs
  useEffect(() => {
    fetchBlogs();
  }, []);
  // value pass into context
  const value = {
    token,
    navigate,
    axios,
    setToken,
    blogs,
    setBlogs,
    input,
    setInput,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// ----> return hook to call the context quickly
export const useAppContext = () => {
  return useContext(AppContext);
};
