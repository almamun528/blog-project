import React, { useEffect, useState } from "react";
import { blog_data } from "../../assets/assets";
import BlogTableItem from "../../components/Admin/BlogTableItem";

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    setBlogs(blog_data);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section className="flex-1 mt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50">
      <h2 className="text-2xl my-4">All Blogs</h2>

      {/* table parent */}
      <div className="  Table-Warper h-4/5 relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hidden bg-white ">
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
          {blogs.map((blog, idx) => {
            return (
              <BlogTableItem
                key={blog?._id}
                blog={blog}
                fetchBlogs={fetchBlogs}
                idx={idx + 1}
              />
            );
          })}
        </tbody>
      </div>
    </section>
  );
};

export default ListBlog;
