import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex lg:w-10/12 md:w-11/12 w-full  mx-auto justify-between items-center py-5 sm:max-20 xl:max-32 cursor-pointer">
      <img
        onClick={() => {
          navigate("/");
          window.scrollTo(0, 0);
        }}
        src={assets.logo}
        alt="logo"
        className="w-32 sm:w-44 cursor-pointer"
      />
      {/* right side  */}
      <button
        onClick={() => navigate("/admin")}
        className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
      >
        Login
        <img src={assets.arrow} className="w-3" alt="arrow" />
      </button>
    </nav>
  );
};

export default Nav;
