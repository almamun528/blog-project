import Comment from "./comment.model.js";

// ------------------ Post a single comment------------
export const addComment = async (req, res) => {
  try {
    const { blog, name, content } = req.body;

    await Comment.create({
      blog,
      name,
      content,
      isApproved: false,
    });

    res.json({ success: true, message: "Comment added for review" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// ------------------ get individual  single comment------------
export const getBlogComments = async (req, res) => {
  // try {
  //   const { blogId } = req.blog;
  //   const comments = await Comment.find({
  //     blog: blogId,
  //     isApproved: true,
  //   }).sort({ createdAt: -1 });
  //   res.json({ success: true, comments });
  // } catch (error) {
  //   res.json({ success: false, message: error.message });
  // }
  try {
    const { blogId } = req.query; // get blogId from query params

    if (!blogId) {
      return res.json({
        success: false,
        message: "blogId query parameter is required",
      });
    }

    const comments = await Comment.find({
      blog: blogId,
      isApproved: true,
    }).sort({ createdAt: -1 });

    res.json({ success: true, comments });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
