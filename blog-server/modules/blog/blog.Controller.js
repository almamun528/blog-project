import fs from "fs";
import imagekit from "../../config/imageKit.js";
import Blog from "./blog.model.js";
import Comment from "../comment/comment.model.js";
import main from "../../config/gemini.js";

// create a single blog
export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog
    );
    const imageFile = req.file;
    // check all file is present or not
    if (!title || !description || !category || !imageFile) {
      return res.json({ success: false, message: "Missing File Is Required" });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);
    // upload image to imageKit
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });
    // optimize image from imageKit
    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" }, // Auto Compress image
        { formate: "webp" }, // convert to modern formate
        { width: 1280 }, // width resizing
      ],
    });
    const image = optimizedImageUrl;
    // save data to database

    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image,
      isPublished,
    });
    res.json({ success: true, message: "Blog Posted Into Database" });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

// read all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true });
    res.json({ success: true, blogs });
  } catch (error) {
    res.json({ success: false, message: error?.message });
  }
};

// read a single blog

export const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params; //get the blog from URL
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.json({ success: false, message: "Blog is not found " });
    }
    // send the blog with response
    res.json({ success: true, blog });
  } catch (error) {
    res.json({ success: false, message: error?.message });
  }
};

// delete a blog by id

export const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);

    await Comment.deleteMany({ blog: id });

    res.json({ success: true, message: "Blog is deleted" });
  } catch (error) {
    res.json({ success: false, message: error?.message });
  }
};

// update blog status either it is isPublished or not
export const togglePublished = async (req, res) => {
  try {
    const { id } = req.body;
    const blog = await Blog.findById(id);
    blog.isPublished = !blog.isPublished;
    await blog.save();
    res.json({ success: true, message: "Blog status updated" });
  } catch (error) {
    res.json({ success: false, message: error?.message });
  }
};

// google apis
export const generateContent = async (req, res) => {
  try {
    const { prompt } = req.body;
    const content = await main(
      prompt + " Generate a blog content for this topic in simple text formate"
    );
    res.json({ success: true, content });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
