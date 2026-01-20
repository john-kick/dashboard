export type Stream = {
  id: string;
  user_id: string;
  user_login: string;
  user_name: string;
  game_id: string;
  game_name: string;
  type: "live";
  title: string;
  viewer_count: number;
  started_at: string; // ISO 8601
  language: string;
  thumbnail_url: string;
  tag_ids: unknown[];
  tags: string[];
  is_mature: boolean;
};

export type FollowedStreamsResponse = {
  data: Stream[];
  pagination: {
    cursor: string;
  };
};

export type UserDataResponse = {
  data: UserData[];
};

type UserData = {
  id: string;
  login: string;
  display_name: string;
  type: "admin" | "global_mod" | "staff" | "";
  broadcaster_type: "affiliate" | "partner" | "";
  description: string;
  profile_image_url: string;
  offline_image_url: string;
  view_count: number;
  email: string;
  created_at: string; // ISO 8601
};

export type TwitchAPIErrorResponse = {
  error: string;
  status: number;
  message: string;
};
