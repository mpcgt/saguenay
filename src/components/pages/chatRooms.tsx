import { useState, useEffect } from "react";
import { createClient, User as SupabaseUser } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "../navigationDiscovery";
import { t } from "i18next";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string
);

interface Room {
  id: string;
  name: string;
  description: string;
  created_at: string;
  expires_at: string;
  user_id: string;
  full_name?: string;
  avatar_url?: string;
}

interface Comment {
  id: string;
  text: string;
  created_at: string;
  user_id: string;
  full_name?: string;
  avatar_url?: string;
}

interface UserWithMetadata extends SupabaseUser {
  user_metadata: {
    full_name?: string;
    avatar_url?: string;
  };
}

export default function ChatRooms() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [roomName, setRoomName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const navigate = useNavigate();
  const { roomId } = useParams();

  const [user, setUser] = useState<UserWithMetadata | null>(null);
  const [room, setRoom] = useState<Room | null>(null);

  useEffect(() => {
    document.title = "Chat Rooms - Saguenay";
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user as UserWithMetadata);
    };
    fetchUser();

    if (roomId) {
      fetchRoomDetails(roomId);
      fetchComments(roomId);
    } else {
      fetchRooms();
    }
  }, [roomId]);

  const fetchRooms = async () => {
    const { data, error } = await supabase
      .from("chat_rooms")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) console.error(error);
    else setRooms(data as Room[]);
  };

  const fetchRoomDetails = async (id: string) => {
    const { data, error } = await supabase
      .from("chat_rooms")
      .select("*")
      .eq("id", id)
      .single();
    if (error) console.error(error);
    else {
      setRoom(data as Room);
    }
  };

  const fetchComments = async (roomId: string) => {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .eq("room_id", roomId)
      .order("created_at", { ascending: false });
    if (error) console.error(error);
    else setComments(data as Comment[]);
  };

  const handleRoomClick = (roomId: string) => {
    navigate(`/rooms/${roomId}`);
  };

  const createRoom = async () => {
    if (!user) {
      alert("Veuillez vous connecter pour créer une salle");
      return;
    }

    setLoading(true);
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 48);

    const full_name = user.user_metadata?.full_name || "Anonymous";
    const avatar_url = user.user_metadata?.avatar_url || "";

    const { error } = await supabase.from("chat_rooms").insert([
      {
        id: uuidv4(),
        name: roomName,
        description: description,
        expires_at: expiration.toISOString(),
        user_id: user.id,
        full_name,
        avatar_url,
      },
    ]);

    if (error) {
      console.error(error);
    } else {
      setRoomName("");
      setDescription("");
      fetchRooms();
    }

    setLoading(false);
  };

  const createComment = async (roomId: string, text: string) => {
    if (!user) return;

    const full_name = user.user_metadata?.full_name || "Anonymous";
    const avatar_url = user.user_metadata?.avatar_url || "";

    const { error } = await supabase.from("comments").insert([
      {
        id: uuidv4(),
        text,
        room_id: roomId,
        user_id: user.id,
        full_name,
        avatar_url,
      },
    ]);
    if (error) console.error(error);
    else {
      fetchComments(roomId);
    }
  };

  return (
    <div className="bg-black h-screen w-screen">
      <div className="max-w-3xl mx-auto p-6">
        <Navigation />
        <h1 className="text-3xl font-bold mt-20">{t("titleEphemere")}</h1>

        {roomId ? (
          room ? (
            <div className="mb-6">
              <h2 className="text-xl font-semibold">{t("detailsEphemere")}</h2>
              <p className="text-lg mb-2">
                {t("expiresEphemere")}{" "}
                {new Date(room.expires_at).toLocaleString()}
              </p>
              <p className="text-lg mb-2">
                {t("createEphemere")} {room.full_name}
              </p>
              <p className="text-lg mb-2">{room.description}</p>
              <h3 className="text-lg font-semibold mb-2">
                {t("commentsEphemere")}
              </h3>
              <div>
                {comments.map((comment) => (
                  <div key={comment.id} className="p-4 bg-gray-100 mb-4">
                    <p className="font-bold text-sm">
                      {t("userEphemere")} {comment.full_name || "Anonymous"}
                    </p>
                    <p className="text-gray-600">{comment.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  className="w-full p-2 bg-zinc-800 hover:bg-zinc-700 border border-gray-700 rounded-2xl transition-all"
                  placeholder="Coming soon..."
                  disabled
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      createComment(
                        roomId,
                        (e.target as HTMLInputElement).value
                      );
                      (e.target as HTMLInputElement).value = "";
                    }
                  }}
                />
              </div>
            </div>
          ) : (
            <div>
              {" "}
              <svg
                aria-hidden="true"
                className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-indigo-600"
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
            </div>
          )
        ) : (
          <div className="mb-4">
            <input
              type="text"
              className="w-full p-2 bg-zinc-800 hover:bg-zinc-700 border border-gray-700 rounded-2xl transition-all"
              placeholder="Nom de la salle"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
            />
            <textarea
              className="w-full p-2 bg-zinc-800 hover:bg-zinc-700 border border-gray-700 rounded-2xl transition-all mt-4"
              placeholder="Description de la salle"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button
              className="bg-indigo-600 text-white px-4 py-2 rounded-2xl flex mx-auto mt-2 hover:bg-indigo-700"
              onClick={createRoom}
              disabled={loading || !roomName}
            >
              {loading ? (
                <svg
                  aria-hidden="true"
                  className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-indigo-600"
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
                "Create room"
              )}
            </button>
          </div>
        )}

        {!roomId && (
          <div>
            {rooms.map((room) => (
              <div
                key={room.id}
                className="p-4 bg-zinc-900 border border-zinc-700 shadow-md rounded-2xl mb-2 cursor-pointer"
                onClick={() => handleRoomClick(room.id)}
              >
                <h2 className="text-xl font-semibold">{room.name}</h2>
                <p className="text-gray-500">
                  {t("expiresEphemere")}{" "}
                  {new Date(room.expires_at).toLocaleString()}
                </p>
                <p className="text-gray-500">
                  {t("createEphemere")} {room.full_name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
