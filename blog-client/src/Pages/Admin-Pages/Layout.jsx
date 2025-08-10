import { Outlet } from "react-router-dom";
import { assets } from "../../assets/assets";
import Sidebar from "../../components/Admin/Sidebar";
import { useAppContext } from "../../Context/AppContext";

const Layout = () => {
  const { axios, setToken, navigate } = useAppContext();
  const logOut = () => {
    localStorage.removeItem("token");
    axios.defaults.headers.common["Authorization"] = null;
    setToken(null);
    navigate("/");
  };
  return (
    <section>
      {/*admin nav bar */}
      <nav className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200">
        <img
          src={assets.logo}
          type="button"
          className="w-32 sm:w-40 cursor-pointer"
          onClick={() => {
            navigate("/");
            scrollTo(0, 0);
          }}
          alt="logo"
        />
        <button
          onClick={() => logOut()}
          className="text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer"
        >
          Log Out
        </button>
      </nav>
      {/* sidebar and children component area */}
      <div className="flex h-[calc(100vh-70px)]">
        <Sidebar />
        <Outlet />
      </div>
    </section>
  );
};

export default Layout;
