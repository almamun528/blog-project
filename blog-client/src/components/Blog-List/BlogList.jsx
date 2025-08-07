import React, { useState } from "react";
import { blog_data, blogCategories } from "../../assets/assets";
import BlogCard from "../Blog-Card/BlogCard";

function BlogList() {
  const [menu, setMenu] = useState("All");

  return (
    <section>
      <div className="flex justify-center gap-4 sm:gap-8 my-10 relative">
        {blogCategories.map((item, idx) => (
          <div key={idx} className="relative">
            <button
              onClick={() => setMenu(item)}
              type="button"
              className={`cursor-pointer text-gray-500 ${
                menu == item && "text-white px-4 pt-0.5"
              }`}
            >
              {item}
            </button>
            {menu === item && (
              <div
                
       
                className="absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full "
              ></div>
            )}
          </div>
        ))}
      </div>
      {/* blog Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:max-16 xl:mx-40">
        {blog_data
          ?.filter((blog) => (menu === "All" ? true : blog.category === menu))
          .map((blog, idx) => (
            <BlogCard key={idx} blog={blog} />
          ))}
      </div>
    </section>
  );
}

export default BlogList;
