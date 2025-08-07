import fs from "fs";
import imagekit from "../../config/imageKit.js";
import Blog from './blog.model.js'


// post a single blog || Create a single blog
export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog
    );
    const imageFile = req.file;

    // Fix: Corrected logic error in field validation
    if (!title || !subTitle || !description || !category || !imageFile) {
      return res.json({
        success: false,
        message: "Missing required fields",
      });
    }

    //  Read image from file system
    const fileBuffer = fs.readFileSync(imageFile.path);

    // Upload image to ImageKit
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blog",
    });

    //Optimize image URL
    const optimizedImageURL = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" },
        { format: "webp" },
        { width: "1280" },
      ],
    });

    // !Save blog to database
    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image: optimizedImageURL,
      isPublished,
    });

    res.json({ success: true, message: "Blog added successfully" });
  } catch (error) {
    res.json({ success: false, message: error?.message });
  }
};
