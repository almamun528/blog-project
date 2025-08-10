import React from "react";
import { useNavigate } from "react-router-dom";

function BlogCard({ blog }) {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/blog/${_id}`);
        window.scrollTo(0, 0);
      }}
      className="cursor-pointer max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
    >
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <span className="inline-block bg-secondary text-black px-3 py-1 text-xs font-semibold rounded-full mb-3">
          {category}
        </span>

        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
          {title}
        </h3>

        <p
          dangerouslySetInnerHTML={{ __html: description?.slice(0, 150) }}
          className="text-sm text-gray-600 line-clamp-3"
        ></p>
      </div>
    </div>
  );
}

export default BlogCard;
