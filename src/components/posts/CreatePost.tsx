import { useEffect, useState } from "react";
import { supabase } from "../../api/supabase";
import { User as SupabaseUser } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import Navigation from "../navigationDiscovery";
import axios from "axios";
import { Image, Smile, MapPin, Send, Bot, Video, Music } from "lucide-react";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { t } from "i18next";

const BANNED_WORDS = import.meta.env.VITE_REACT_APP_BANNED_WORDS
  ? import.meta.env.VITE_REACT_APP_BANNED_WORDS.split(",")
  : [];

const CreatePost = () => {
  useEffect(() => {
    document.title = "Create Post - Saguenay";
  }, []);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [user, setUser] = useState<UserWithMetadata | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [spotifyLink, setSpotifyLink] = useState<string>("");
  const [deezerLink, setDeezerLink] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  interface UserWithMetadata extends SupabaseUser {
    user_metadata: {
      full_name?: string;
      avatar_url?: string;
    };
  }

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error);
      } else {
        setUser(data.user as UserWithMetadata);
      }
    };
    fetchUser();
  }, []);

  const containsBannedWords = (text: string): string | null => {
    const lowerCasedText = text.toLowerCase();
    const foundWord = BANNED_WORDS.find((word: string) =>
      lowerCasedText.includes(word)
    );
    return foundWord || null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const bannedWordInTitle = containsBannedWords(title);
    const bannedWordInContent = containsBannedWords(content);

    if (bannedWordInTitle || bannedWordInContent) {
      const bannedWord = bannedWordInTitle || bannedWordInContent;
      alert(
        `Your post contains the forbidden word: "${bannedWord}". Please modify it IMMEDIATELY. 🚨`
      );
      setLoading(false);
      return;
    }

    if (!user) {
      alert("You must be logged in to create a post.");
      setLoading(false);
      return;
    }

    const full_name = user.user_metadata?.full_name || "Anonymous";
    const avatar_url = user.user_metadata?.avatar_url || "";

    const { error } = await supabase.from("posts").insert([
      {
        title,
        content,
        user_id: user.id,
        full_name,
        avatar_url,
        hashtags: extractHashtags(content),
        spotify_link: spotifyLink,
      },
    ]);

    if (error) {
      console.error("Error inserting post:", error.message, error.details);
      alert("Error adding post, please try again.");
    } else {
      setTitle("");
      setContent("");
      setSpotifyLink("");
      setDeezerLink("");
      console.log("Post successfully created.");
      navigate("/discovery");
    }

    setLoading(false);
  };

  const extractHashtags = (text: string) => {
    const regex = /#\w+/g;
    return text.match(regex) || [];
  };

  const handleTextGeneration = async () => {
    if (!content.trim()) {
      console.error("The content field is empty.");
      alert("Please enter text before generating.");
      return;
    }

    setIsGenerating(true);
    const apiUrl =
      "https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1";
    const token = import.meta.env.VITE_HUGGING_FACE_AI_KEY;

    try {
      const response = await axios.post(
        apiUrl,
        { inputs: content.trim() },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const generatedText = response.data?.[0]?.generated_text || "";
      if (!generatedText) console.warn("No text generated.");

      setContent((prevContent) => `${prevContent} ${generatedText}`.trim());
    } catch (err) {
      console.error("Text generation error:", err);
      alert("An error occurred during generation.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleLinkSubmit = () => {
    if (spotifyLink || deezerLink) {
      setIsModalOpen(false);
    } else {
      alert("Please provide a Spotify or Deezer link.");
    }
  };

  const renderMediaPreview = () => {
    if (spotifyLink.includes("spotify")) {
      const match = spotifyLink.match(/track\/([a-zA-Z0-9]+)/);
      if (match) {
        const trackId = match[1];
        return (
          <iframe
            src={`https://open.spotify.com/embed/track/${encodeURIComponent(
              trackId
            )}`}
            width="100%"
            height="80"
            frameBorder="0"
            allow="encrypted-media"
            className="rounded-2xl"
          />
        );
      } else {
        return <p className="text-red-500">Spotify link format is invalid.</p>;
      }
    }
    if (deezerLink.includes("deezer")) {
      const match = deezerLink.match(/(track|album)\/([0-9]+)/);
      if (match) {
        const deezerId = match[2];
        return (
          <iframe
            src={`https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=007FEB&layout=dark&size=medium&type=tracks&id=${encodeURIComponent(
              deezerId
            )}`}
            width="100%"
            height="80"
            frameBorder="0"
            allow="encrypted-media"
            className="rounded-2xl"
          />
        );
      } else {
        return <p className="text-red-500">Deezer link format is invalid.</p>;
      }
    }
    return null;
  };

  return (
    <>
      <Navigation />
      <div className="bg-black">
        <div className="min-h-screen pt-10 mx-auto flex flex-col items-center mt-16">
          <h1 className="text-3xl mb-5 font-bold">{t("createPost")}</h1>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col items-center"
          >
            <div className="relative mb-4 w-full">
              <input
                type="text"
                className="p-4 block w-full bg-zinc-800 hover:bg-zinc-700 border border-gray-700 rounded-2xl text-sm transition-all focus:border-indigo-500 focus:ring-indigo-500"
                placeholder={t("placeholderTitle")}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="relative mb-4 w-full">
              <textarea
                className="p-4 block w-full bg-zinc-800 hover:bg-zinc-700 border-gray-700 rounded-2xl text-sm transition-all focus:border-indigo-500 focus:ring-indigo-500"
                placeholder={t("placeholderContent")}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                rows={5}
              ></textarea>
            </div>

            {renderMediaPreview()}

            <div className="flex space-x-4 items-center mt-5 mb-5">
              <Image className="w-6 h-6" />
              <Video className="w-6 h-6" />
              <Music
                className="w-6 h-6 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              />
              <Smile className="w-6 h-6" />
              <MapPin className="w-6 h-6" />
            </div>

            <div className="flex justify-end w-full gap-4">
              <button
                type="button"
                onClick={handleTextGeneration}
                className="inline-flex justify-center items-center text-white bg-indigo-500 hover:bg-indigo-600 focus:z-10 focus:outline-none focus:bg-indigo-600 transition px-6 py-2 rounded-2xl"
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Bot />
                    &nbsp;&nbsp;Generation...
                  </>
                ) : (
                  <>
                    <Bot />
                    &nbsp;&nbsp;{t("postAI")}
                  </>
                )}
              </button>

              <button
                type="submit"
                className="inline-flex justify-center items-center text-white bg-indigo-500 hover:bg-indigo-600 focus:z-10 focus:outline-none focus:bg-indigo-600 transition px-6 py-2 rounded-2xl"
                disabled={loading}
              >
                {loading ? (
                  <svg
                    aria-hidden="true"
                    className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                ) : (
                  <Send />
                )}
                <span className="ml-2">{t("postSend")}</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-black p-6 rounded-xl w-full max-w-md">
            <h2 className="text-xl mb-4 text-white flex items-center">
              Enter Spotify
              <FontAwesomeIcon
                icon={faSpotify}
                style={{ color: "#1DB954", fontSize: "24px" }}
                className="mx-2"
              />
              or Deezer
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="#AC41FF"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-2"
              >
                <path d="M18.77 5.55c.19-1.07.46-1.75.76-1.75.56 0 1.02 2.34 1.02 5.23 0 2.89-.46 5.23-1.02 5.23-.23 0-.44-.4-.61-1.06-.27 2.43-.83 4.11-1.48 4.11-.5 0-.96-1-1.26-2.6-.2 3.03-.73 5.17-1.33 5.17-.39 0-.73-.85-.99-2.23-.31 2.85-1.03 4.85-1.86 4.85-.83 0-1.55-2-1.86-4.85-.25 1.38-.6 2.23-.99 2.23-.6 0-1.12-2.14-1.33-5.16-.3 1.58-.75 2.6-1.26 2.6-.65 0-1.2-1.68-1.48-4.12-.17.66-.38 1.06-.61 1.06-.56 0-1.02-2.34-1.02-5.23 0-2.89.46-5.23 1.02-5.23.3 0 .57.68.76 1.75C5.53 3.7 6 2.5 6.56 2.5c.66 0 1.22 1.7 1.49 4.17.26-1.8.66-2.94 1.1-2.94.63 0 1.16 2.25 1.36 5.4.36-1.62.9-2.63 1.5-2.63.58 0 1.12 1.01 1.49 2.62.2-3.14.72-5.4 1.35-5.4.44 0 .84 1.15 1.1 2.95.27-2.47.84-4.17 1.49-4.17.55 0 1.03 1.2 1.33 3.05ZM2 8.52c0-1.3.26-2.34.58-2.34.32 0 .57 1.05.57 2.34 0 1.29-.25 2.34-.57 2.34-.32 0-.58-1.05-.58-2.34Zm18.85 0c0-1.3.25-2.34.57-2.34.32 0 .58 1.05.58 2.34 0 1.29-.26 2.34-.58 2.34-.32 0-.57-1.05-.57-2.34Z"></path>
              </svg>
              Link
            </h2>
            <input
              type="text"
              placeholder="Spotify Link"
              className="w-full p-2 mb-4 bg-zinc-800 rounded-2xl text-white"
              value={spotifyLink}
              onChange={(e) => setSpotifyLink(e.target.value)}
            />
            <input
              type="text"
              placeholder="Deezer Link (Coming soon!)"
              className="w-full p-2 mb-4 bg-zinc-800 rounded-2xl text-white"
              value={deezerLink}
              onChange={(e) => setDeezerLink(e.target.value)}
              disabled
            />
            <div className="flex justify-between">
              <button
                className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-2xl"
                onClick={() => setIsModalOpen(false)}
              >
                ✖
              </button>
              <button
                className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-2xl"
                onClick={handleLinkSubmit}
              >
                Save Link
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePost;
