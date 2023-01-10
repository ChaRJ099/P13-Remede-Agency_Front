import {
  loginFetchingAction,
  loginResolvedAction,
  loginRejectedAction,
  profileResolved,
  profileRejected,
  updateProfileResolved,
  updateProfileRejected,
  resetStateAction,
} from "../Utils/reducer";
import { userLogin, userProfile, modifyUserProfile } from "./api-services";
import { store } from "../Utils/store";
import { selectLoginState } from "../Utils/selectors";

/** The user exists in database & the connection is successful :
 *  - Get user's token,
 *  - Update token's state
 * @param {{
 *  email: string,
 *  password: string
 * }} user
 * dispatch token or error
 */
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
      getProfile(token);
    } else {
      throw new Error(response.message);
    }
  } catch (error) {
    store.dispatch(loginRejectedAction(error));
  }
}

/**
 * If API response is ok :
 * - Update user's firstname & lastname's state,
 * - User's logged status is true,
 * - Navigate to user's dashboard
 * @param { string } token
 */
async function getProfile(token) {
  const response = await userProfile(token);
  if (response.status === 200) {
    const payload = {
      firstName: response.body.firstName,
      lastName: response.body.lastName,
    };
    store.dispatch(profileResolved(payload));
  } else {
    store.dispatch(profileRejected());
  }
}

/**
 * update user's firstname and lastname in database
 * @param {{
 * user: {
 * firstName: string,
 * lastName: string
 * }}} payload
 */
export async function updateProfile(payload) {
  const response = await modifyUserProfile(payload);
  if (response && response.status === 200) {
    const payload = {
      firstName: response.body.firstName,
      lastName: response.body.lastName,
    };
    store.dispatch(updateProfileResolved(payload));
  } else {
    store.dispatch(updateProfileRejected(payload));
    throw new Error(response.message);
  }
}

// Reset state on logout
export async function resetOnLogout() {
  store.dispatch(resetStateAction());
}
