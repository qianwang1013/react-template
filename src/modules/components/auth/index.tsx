import React from "react";
import FacebookLogin, {
  ReactFacebookFailureResponse,
  ReactFacebookLoginInfo,
  ReactFacebookLoginProps,
} from "react-facebook-login";
import { connect } from "react-redux";
import { IDispatchType } from "../../stores/types";
import { ActionType } from "../../stores/user/actions";
import { UserState } from "../../stores/user/state";
import { AppUser, getUser } from "../../types/user";
import Button from "../button";
import Popover from "../popover";
import "./styles.scss";

type LoginProps<P, S> = {
  appId: string;
  scopes: string;
  onSuccess?: () => void;
  currentUser?: AppUser;
  login?: (user: AppUser) => IDispatchType;
  extraProps?: Partial<P>;
};

function isUser(
  res: ReactFacebookLoginInfo | ReactFacebookFailureResponse
): res is ReactFacebookLoginInfo {
  return !!(res as ReactFacebookLoginInfo).accessToken;
}

const login: React.FC<LoginProps<
  ReactFacebookLoginProps,
  ReactFacebookLoginInfo | ReactFacebookFailureResponse
>> = ({ currentUser, appId, scopes, login, extraProps }) => {
  return !currentUser ? (
    <FacebookLogin
      appId={appId}
      autoLoad={true}
      fields={scopes}
      callback={(user) => {
        if (isUser(user) && !!login) {
          login(getUser(user));
        }
      }}
      {...extraProps}
    />
  ) : (
    <Popover renderFn={() => <Button>Log Out</Button>}>
      <img className="profile" src={currentUser.profileUrl} />
    </Popover>
  );
};

export default connect(
  (state: { user: UserState }) => ({
    currentUser: state.user.user,
  }),
  (dispatch) => ({
    login: (user: AppUser) =>
      dispatch({ type: ActionType.LOG_IN, payload: user }),
  })
)(login);
