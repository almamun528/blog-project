import React from "react";
import { NavLink } from "react-router-dom";
import { adminSidebarData } from "../../assets/All-Apis/Admin-Apis/adminNav";

const Sidebar = () => {
  return (
    <section>
      {/* admin all route store into Admin apis folder */}
      {adminSidebarData?.map((item) => (
        <NavLink
          end
          key={item.link}
          to={item.link}
          className={({ isActive }) =>
            [
              "flex items-center  gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer",
              isActive ? "bg-indigo-200 border-r-4 border-primary" : "",
            ].join(" ")
          }
        >
          <img src={item.icon} className="w-5" alt={item.title} />
          <p className="hidden md:block">{item.title}</p>
        </NavLink>
      ))}
    </section>
  );
};

export default Sidebar;
