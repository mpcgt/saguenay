import { useState } from 'react';
import { supabase } from '../../utils/supabaseClient';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from('posts')
      .insert([{ title, content }]);

    if (error) {
      console.error('Error inserting post:', error);
    } else {
      setTitle('');
      setContent('');
      console.log('Post created successfully');
    }

    setLoading(false);
  };

  return (
    <div className="w-full pt-10 mx-auto flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Create Post</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col items-center">
        <div className="relative mb-4 w-full">
          <input
            type="text"
            className="p-4 block w-full bg-black border border-gray-700 rounded-lg text-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="relative mb-4 w-full">
          <textarea
            className="p-4 block w-full bg-black border border-gray-700 rounded-lg text-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter post content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={5}
          ></textarea>

          <div className="absolute bottom-px inset-x-0 p-2 rounded-b-lg bg-black">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
              </div>
              <button
                type="submit"
                className="inline-flex w-20 shrink-0 justify-center items-center size-8 rounded-lg text-white bg-indigo-500 hover:bg-indigo-600 focus:z-10 focus:outline-none focus:bg-indigo-600 transition"
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
                <p className='text-white'>&nbsp;&nbsp;Post</p>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
