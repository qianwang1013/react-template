import { ReactFacebookLoginInfo } from "react-facebook-login";

export interface AppUser {
  userId: string;
  name: string;
  email?: string;
  profileUrl?: string;
}

export function getUser(facebookUser: ReactFacebookLoginInfo): AppUser {
  return {
    userId: facebookUser.id,
    name: facebookUser.name || "Anonymous",
    email: facebookUser.email,
    profileUrl: facebookUser.picture?.data?.url,
  };
}
