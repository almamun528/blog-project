import React, { useEffect, useState } from "react";
import { blog_data } from "../../assets/assets";
import BlogTableItem from "../../components/Admin/BlogTableItem";

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    // Simulating data fetch from static source (replace with API in production)
    setBlogs(blog_data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section className="flex-1 mt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50">
      <h2 className="text-2xl font-semibold mb-4">All Blogs</h2>

      {/* Table Container */}
      <div className="Table-Warper h-4/5 relative max-w-4xl overflow-x-auto shadow rounded-lg bg-white scrollbar-hidden">
        <table className="w-full text-sm text-gray-600">
          {/* Table Header */}
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
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

          {/* Table Body */}
          <tbody>
            {blogs.length > 0 ? (
              blogs.map((blog, idx) => (
                <BlogTableItem
                  key={blog?._id || idx}
                  blog={blog}
                  fetchBlogs={fetchBlogs}
                  idx={idx + 1}
                />
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-400">
                  No blogs available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ListBlog;
