import {
  loginFetchingAction,
  loginResolvedAction,
  loginRejectedAction,
  profileResolved,
  profileRejected,
  resetStateAction,
} from "../Utils/reducer";
import { userLogin, userProfile } from "./api-services";
import { store } from "../Utils/store";
// import { useNavigate } from "react-router-dom";
import { selectLoginState } from "../Utils/selectors";

export async function getUser(user) {
  const status = selectLoginState(store.getState()).status;

  if (status === "fetching") {
    return;
  }
  store.dispatch(resetStateAction());

  store.dispatch(loginFetchingAction(user));

  try {
    const response = await userLogin(user);
    if (response.status === 200) {
      const token = response.body.token;
      const payload = {
        token: token,
      };

      store.dispatch(loginResolvedAction(payload));
      console.log("userProfile(token)", token);
      getProfile(token);
    } else {
      console.log("response", response);
      throw new Error(response.message);
    }
  } catch (error) {
    store.dispatch(loginRejectedAction(error));
  }
}

async function getProfile(token) {
  const response = await userProfile(token);
  if (response.status === 200) {
    console.log("response ok", response);
    store.dispatch(profileResolved());
  } else {
    console.log("response KO", response);
    store.dispatch(profileRejected());
  }
}
