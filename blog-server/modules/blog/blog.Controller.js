import fs from "fs";
import imagekit from "../../config/imageKit.js";
import Blog from "./blog.model.js";

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


