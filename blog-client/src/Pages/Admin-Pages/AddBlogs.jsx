import React, { useEffect, useRef, useState } from "react";
import { assets, blogCategories } from "../../assets/assets";
import Quill from "quill";

const AddBlogs = () => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("startup");
  const [isPublished, setIsPublished] = useState(false);

  const generateWithAi = async () => {
    console.log("hello ai");
    // Add AI content logic here
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Handle blog form submission
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);

  return (
    <form
      className="flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll"
      onSubmit={handleFormSubmit}
    >
      <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">
        {/* Thumbnail Upload */}
        <p className="font-medium mb-2">Upload Thumbnail</p>
        <label htmlFor="image">
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt="thumbnail preview"
            className="mt-1 h-16 rounded cursor-pointer"
          />
          <input
            type="file"
            id="image"
            hidden
            required
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>

        {/* Blog Title */}
        <p className="mt-4">Blog Title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        {/* Sub Title */}
        <p className="mt-4">Sub Title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={(e) => setSubTitle(e.target.value)}
          value={subTitle}
        />

        {/* Description */}
        <p className="mt-4">Blog Description</p>
        <div className="max-w-lg h-[300px] pb-16 sm:pb-10 pt-2 relative">
          <div ref={editorRef}></div>
          <button
            className="absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer"
            type="button"
            onClick={generateWithAi}
          >
            Generate with AI
          </button>
        </div>

        {/* Category */}
        <p className="mt-4">Blog Category</p>
        <select
          onChange={(e) => setCategory(e.target.value)}
          name="category"
          value={category}
          className="mt-2 px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded"
        >
          <option value="">Select Category</option>
          {blogCategories?.map((item, idx) => (
            <option value={item} key={idx}>
              {item}
            </option>
          ))}
        </select>

        {/* Publish Toggle */}
        <div className="flex items-center gap-2 mt-4">
          <p>Publish Now</p>
          <input
            type="checkbox"
            checked={isPublished}
            className="cursor-pointer scale-125"
            onChange={(e) => setIsPublished(e.target.checked)}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-8 w-40 h-10 bg-primary text-white rounded cursor-pointer"
        >
          Add Blog
        </button>
      </div>
    </form>
  );
};

export default AddBlogs;
