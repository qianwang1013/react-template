import { AppUser } from "../../types/user";

export enum ActionType {
  LOG_IN = "LOG_IN",
  LOG_OUT = "LOG_OUT",
}

export interface LogInAction {
  type: ActionType.LOG_IN;
  payload: AppUser;
}

export interface LogOutAction {
  type: ActionType.LOG_OUT;
}

export type Actions = LogInAction | LogOutAction;
export type DispatchType = (args: Actions) => Actions;

export const login = (user: AppUser) => (dispatch: DispatchType) => {
  return dispatch({ type: ActionType.LOG_IN, payload: user });
};

export function simulateHttpRequest(action: Actions) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
