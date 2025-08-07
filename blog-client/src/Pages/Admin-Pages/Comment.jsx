import React, { useEffect, useState } from "react";
import { comments_data } from "../../assets/assets";
import CommentTableItem from "../../components/Admin/CommentTableItem";

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");
  const fetchComments = async () => {
    setComments(comments_data);
  };
  useEffect(() => {
    fetchComments();
  }, []);
  return (
    <section className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50">
      <div className="flex justify-between items-center max-w-3xl">
        <h1>Comments</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setFilter("Approved")}
            className={`shadow border rounded-full px-4 py-1 cursor-pointer text-xs ${
              filter === "Approved" ? "text-green-800" : "text-gray-700"
            }`}
          >
            Approved
          </button>
          <button
            onClick={() => setFilter("Not Approved")}
            className={`shadow border rounded-full px-4 py-1 cursor-pointer text-xs ${
              filter === "Not Approved" ? "text-green-800" : "text-gray-700"
            }`}
          >
            Not Approved
          </button>
        </div>
      </div>

      {/*  */}
      <div className="relative h-4/5 max-w-3xl overflow-x-auto mt-4 bg-white shadow rounded-lg scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-gray-700 text-left uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                Blog Title & Comment
              </th>
              <th scope="col" className="px-6 py-3 max-sm:hidden">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {/* table body */}
          <tbody>
            {comments
              ?.filter((comment) => {
                if (filter === "Approved") return comment.isApproved === true;
                return comment.isApproved === false;
              })
              .map((comment, idx) => (
                <CommentTableItem
                  key={comment?._id}
                  comment={comment}
                  idx={idx + 1}
                  fetchComments={fetchComments}
                />
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Comment;
