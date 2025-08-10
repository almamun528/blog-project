import jwt from "jsonwebtoken";
import Blog from "../blog/blog.model.js";
import Comment from "../comment/comment.model.js";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email !== process.env.admin_email ||
      password !== process.env.admin_password
    ) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }

    const token = jwt.sign({ email }, process.env.jwt_secret_key);
    res.json({ success: true, token });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// !-------------- Admin will get all blogs -----------

export const getAllBlogsAdmin = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.json({ success: true, blogs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// ------------------ Admin can See all the blogs ---------------

export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({})
      .populate("blog")
      .sort({ createdAt: -1 });
    res.json({ success: true, comments });
  } catch (error) {
    res.json({ success: false, message: error?.message });
  }
};

// --------------------------- Dashboard data------------

export const getDashboard = async (req, res) => {
  try {
    const recentBlogs = await Blog.find({}).sort({ createdAt: -1 }).limit(5);
    const blogs = await Blog.countDocuments();
    const comments = await Comment.countDocuments();
    const draft = await Blog.countDocuments({ isPublished: false });

    const dashboardData = {
      blogs,
      comments,
      draft,
      recentBlogs,
    };
    res.json({ success: true, dashboardData });
  } catch (error) {
    res.json({ success: false, message: error?.message });
  }
};
// ----------------------------- Admin can delete or update any document--------------

export const deleteCommentById = async (req, res) => {
  try {
    const { id } = req.body;
    await Comment.findByIdAndDelete(id);
    res.json({ success: true, message: "Comment is deleted" });
  } catch (error) {
    res.json({ success: false, message: error?.message });
  }
};



export const approveCommentById = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.json({ success: false, message: "Comment ID is required" });
    }

    const updatedComment = await Comment.findByIdAndUpdate(
      id,
      { isApproved: true },
      { new: true }
    );

    if (!updatedComment) {
      return res.json({ success: false, message: "Comment not found" });
    }

    res.json({
      success: true,
      message: "Comment approved successfully",
      comment: updatedComment,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
