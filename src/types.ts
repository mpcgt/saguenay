export type Post = {
    id: string;
    title: string;
    content: string;
    created_at: string;
    user: {
      username: string;
      avatar_url: string;
      id: string;
    };
};