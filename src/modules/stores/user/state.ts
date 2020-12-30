import { AppUser } from "../../types/user";

export interface UserState {
  user?: AppUser;
}

export const initialState: UserState = {
  user: undefined,
};
