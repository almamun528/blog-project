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
    // Simulating fetch – replace with real API call if needed
    setDashboardData(dashboard_data);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <section className="flex-1 md:p-10 lg:bg-blue-50/50">
      {/* Stats Cards */}
      <div className="CARD-WRAPER flex flex-wrap gap-4">
        {/* Blogs */}
        <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <img src={assets.dashboard_icon_1} alt="Blogs Icon" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboardData?.blogs}
            </p>
            <p className="text-gray-400 font-light">Blogs</p>
          </div>
        </div>

        {/* Comments */}
        <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <img src={assets.dashboard_icon_2} alt="Comments Icon" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboardData?.comments}
            </p>
            <p className="text-gray-400 font-light">Comments</p>
          </div>
        </div>

        {/* Drafts */}
        <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <img src={assets.dashboard_icon_3} alt="Drafts Icon" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboardData?.draft}
            </p>
            <p className="text-gray-400 font-light">Drafts</p>
          </div>
        </div>
      </div>

      {/* Latest Blogs Table */}
      <div>
        <div className="flex items-center gap-3 m-4 mt-6 text-gray-600">
          <img src={assets.dashboard_icon_4} alt="Latest Blogs Icon" />
          <p>Latest Blogs</p>
        </div>

        <div className="Table-Warper relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hidden bg-white">
          <table className="w-full text-sm text-gray-600">
            {/* Table Head */}
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="px-2 py-4">#</th>
                <th className="px-2 py-4 xl:px-6">Blog Title</th>
                <th className="px-2 py-4 max-sm:hidden">Date</th>
                <th className="px-2 py-4 max-sm:hidden">Status</th>
                <th className="px-2 py-4">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {dashboardData.recentBlogs.length > 0 ? (
                dashboardData.recentBlogs.map((blog, idx) => (
                  <BlogTableItem
                    key={blog?._id || idx}
                    blog={blog}
                    fetchBlogs={fetchDashboardData}
                    idx={idx + 1}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-400">
                    No recent blogs available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
