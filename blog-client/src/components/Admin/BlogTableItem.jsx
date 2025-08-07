import React from "react";
import { assets } from "../../assets/assets";

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt, isPublished } = blog;
  const blogDate = new Date(createdAt).toDateString();

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
      {/* Index */}
      <td className="px-3 py-4 text-sm text-gray-600 font-medium">{index}</td>

      {/* Blog Title */}
      <td className="px-3 py-4 text-sm text-gray-800">{title}</td>

      {/* Date */}
      <td className="px-3 py-4 max-sm:hidden text-sm text-gray-500">
        {blogDate}
      </td>

      {/* Status */}
      <td className="px-3 py-4 max-sm:hidden">
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            isPublished
              ? "text-green-700 bg-green-100"
              : "text-orange-700 bg-orange-100"
          }`}
        >
          {isPublished ? "Published" : "Unpublished"}
        </span>
      </td>

      {/* Actions */}
      <td className="px-3 py-4 flex items-center gap-3 text-sm">
        <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100 transition">
          {isPublished ? "Unpublish" : "Publish"}
        </button>
        <button title="Delete blog">
          <img
            src={assets.cross_icon}
            alt="Delete"
            className="w-5 hover:scale-110 transition-transform cursor-pointer"
          />
        </button>
      </td>
    </tr>
  );
};

export default BlogTableItem;
