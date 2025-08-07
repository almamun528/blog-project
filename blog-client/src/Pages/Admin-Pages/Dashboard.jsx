import React, { useEffect, useState } from "react";
import { assets, dashboard_data } from "../../assets/assets";
import BlogTableItem from "../../components/Admin/BlogTableItem";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    draft: 0,
    recentBlogs: [],
  });
  const fetchDashboardData = async () => {
    setDashboardData(dashboard_data);
  };
  useEffect(() => {
    fetchDashboardData();
  }, []);
  return (
    <section className="flex-1 md:p-10 lg:bg-blue-50/50">
      <div className="CARD-WRAPER flex flex-wrap gap-4 ">
        {/* 1st card */}
        <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <img src={assets.dashboard_icon_1} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboardData?.blogs}
            </p>
            <p className="text-gray-400 font-light">Blogs</p>
          </div>
        </div>
        {/* 2nd card */}
        <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <img src={assets.dashboard_icon_2} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboardData?.comments}
            </p>
            <p className="text-gray-400 font-light">comments</p>
          </div>
        </div>
        {/* 3rd */}
        <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <img src={assets.dashboard_icon_3} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboardData?.blogs}
            </p>
            <p className="text-gray-400 font-light">Drafts</p>
          </div>
        </div>
        {/* cards ends */}
      </div>
      {/* card warper ends */}
      <div>
        <div className="flex items-center gap-3 m-4 mt-6 text-gray-600">
          <img src={assets.dashboard_icon_4} alt="" />
          <p>Latest Blogs</p>
        </div>
        {/* Table Warper */}
        <div className="  Table-Warper relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hidden bg-white ">
          {/* table start  */}
          <table className="w-full text-sm text-gray-500">
            {/* table head started here  */}
            <thead className="text-xs text-gray-600 text-left uppercase">
              <tr>
                <th scope="col" className="px-2 py-4">
                  #
                </th>
                <th scope="col" className="px-2 py-4 xl:px-6">
                  Blog Title
                </th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">
                  Date
                </th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">
                  Status
                </th>
                <th scope="col" className="px-2 py-4">
                  Action
                </th>
              </tr>
            </thead>
          </table>
          {/* table body or content area */}
          <tbody>
            {dashboardData.recentBlogs.map((blog, idx) => {
              return (
                <BlogTableItem
                  key={blog?._id}
                  blog={blog}
                  fetchBlogs={fetchDashboardData}
                  idx={idx + 1}
                />
              );
            })}
          </tbody>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
