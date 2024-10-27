import { useEffect, useState } from "react";
import { supabase } from "../../api/supabase";
import { useNavigate } from 'react-router-dom';
import Navigation from "../navigationDiscovery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHashtag,
  faLink,
  faPhotoFilm,
} from "@fortawesome/free-solid-svg-icons";

const CreatePost = () => {
  useEffect(() => {
    document.title = 'Create Post - Saguenay';
  }, []);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitClick = () => {
    setTimeout(() => {
      navigate('/discovery');
    }, 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("posts").insert([{ title, content }]);

    if (error) {
      console.error("Error inserting post:", error.message, error.details);
    } else {
      setTitle("");
      setContent("");
      console.log("Post created successfully");
    }

    setLoading(false);
  };

  return (
    <>
      <Navigation />
      <div className="bg-black">
      <div className="w-full pt-10 mx-auto flex flex-col items-center mt-16">
        <h1 className="text-3xl mb-5 font-bold">Create Post</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col items-center"
        >
          <div className="relative mb-4 w-full">
            <input
              type="text"
              className="p-4 block w-full bg-black border border-gray-700 rounded-lg text-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled
              required
            />
          </div>

          <div className="relative mb-4 w-full">
            <textarea
              className="p-4 block w-full bg-black border border-gray-700 rounded-lg text-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter post content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled
              required
              rows={5}
            ></textarea>

            <div className="absolute bottom-px inset-x-0 p-2 rounded-b-lg bg-black">
              <div className="flex justify-between items-center">
                <div className="flex items-center"></div>
                <button
                onClick={submitClick}
                  type="submit"
                  className="inline-flex w-20 shrink-0 justify-center items-center size-8 text-white bg-indigo-500 hover:bg-indigo-600 focus:z-10 focus:outline-none focus:bg-indigo-600 transition"
                  disabled={loading}
                >
                  {loading ? (
                    <span>Loading...</span>
                  ) : (
                    <svg
                      className="shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                    </svg>
                  )}
                  <p className="text-white">&nbsp;&nbsp;Post</p>
                </button>
              </div>
            </div>
          </div>
          <p className="text-sm text-right relative bottom-4 left-12 ">
            Before publishing, please read{" "}
            <a
              href="https://github.com/mpcgt/saguenay?tab=coc-ov-file#readme"
              target="blank"
            >
              the code of conduct.
            </a>
          </p>
          <div className="flex space-x-4">
            <button className="gap-x-3.5 py-2 px-2.5 text-base hover:bg-gray-900 rounded-xl transition-all text-white hover:text-white dark:bg-black">
              <FontAwesomeIcon
                icon={faPhotoFilm}
                style={{ color: "#ffffff" }}
              />
              &nbsp;&nbsp;Images & Video
            </button>
            <button className="gap-x-3.5 py-2 px-2.5 text-base hover:bg-gray-900 rounded-xl transition-all text-white hover:text-white dark:bg-black">
              <FontAwesomeIcon icon={faLink} style={{ color: "#ffffff" }} />
              &nbsp;&nbsp;Link
            </button>
            <button className="gap-x-3.5 py-2 px-2.5 text-base hover:bg-gray-900 rounded-xl transition-all text-white hover:text-white dark:bg-black">
              <FontAwesomeIcon icon={faHashtag} style={{ color: "#ffffff" }} />
              &nbsp;&nbsp;Tags
            </button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default CreatePost;
