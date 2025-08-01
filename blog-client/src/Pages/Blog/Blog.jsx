import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../../assets/assets";
import Nav from "../../components/NavBar/Nav";
import Moment from "moment";
import Footer from "../../components/Footer/Footer";
import Spin from "../../components/Loading/Spin";

const Blog = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [comments, setComments] = useState([]);
  const [name, SetName] = useState("");
  const [content, setContent] = useState("");
  const fetchBlogData = async () => {
    const data = blog_data?.find((item) => item._id === id);
    setData(data);
  };
  useEffect(() => {
    fetchBlogData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchComments = async () => {
    setComments(comments_data);
  };
  useEffect(() => {
    fetchComments();
  }, []);

  // event for comment review submit
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return data ? (
    <section className="">
      <div className="relative">
        <img
          src={assets?.gradientBackground}
          alt="background-image"
          className="absolute -top-50 -z-1 opacity-50 "
        />
        <Nav />
        {/* hero section */}
        <>
          <div className="text-center mt-20 text-gray-600">
            <p className="py-4 text-indigo-600 font-medium text-md">
              Published on {Moment(data.createdAt).format("MMM Do YYYY")}
            </p>
            <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800">
              {data.title}
            </h1>
            <h6 className="my-5 max-w-lg truncate mx-auto">{data.subTitle}</h6>
            <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-indigo-600/35 bg-indigo-600/5 font-medium  ">
              Author Name- User Name{" "}
            </p>
          </div>
        </>

        {/* bottom part with image */}
        <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
          <img src={data?.image} alt="" className="rounded-3xl mb-5" />
          <div
            className="rich-text max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></div>
          {/* Comment section  */}
          <div className="mt-14 mb-10 max-w-3xl mx-auto">
            <p className="my-4 font-semibold">Comments ({comments?.length})</p>

            {/* show comments  */}
            <div className="flex flex-col gap-4">
              {comments.map((item, idx) => (
                <div
                  key={idx}
                  className="relative bg-indigo-500/2 border border-indigo-500/5 max-w-xl p-4 rounded text-gray-600"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src={assets.user_icon}
                      alt="user-icon"
                      className="w-6"
                    />
                    <p className="font-medium">{item.name}</p>
                  </div>
                  <p className="text-sm max-w-md ml-8">{item.content}</p>
                  <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">
                    {Moment(item.createdAt).fromNow()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comment Form Area */}
          <div className="flex justify-center">
            <div className="w-full max-w-xl px-4">
              <p className="font-semibold mb-4">Add Your Honest Comment.</p>
              <form
                onSubmit={() => handleReviewSubmit}
                className="flex flex-col items-start gap-4 max-w-lg "
              >
                <input
                  onChange={(e) => SetName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded outline-none"
                  type="text"
                  placeholder="Name"
                  required
                />
                <textarea
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded outline-none h-48"
                  required
                  name="Comment"
                  id=""
                ></textarea>
                <button
                  className="bg-primary text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          {/* social media icons */}
          <div className="my-24 w-1/2 mx-auto ">
            <p className="text-indigo-500 font-semibold my-4">
              Share this article in social media
            </p>
            {/* Social Media Icons  */}
            <div className="flex">
              <img
                className="hover:cursor-pointer"
                src={assets.facebook_icon}
                alt="facebook-icon"
              />
              <img
                className="hover:cursor-pointer"
                src={assets.twitter_icon}
                alt="x-icon"
              />
              <img
                className="hover:cursor-pointer"
                src={assets.googleplus_icon}
                alt="google-icon"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  ) : (
    <Spin />
  );
};

export default Blog;
