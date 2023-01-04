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
      // console.log("userProfile(token)", token);
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
    const payload = {
      firstName: response.body.firstName,
      lastName: response.body.lastName,
    };
    store.dispatch(profileResolved(payload));
  } else {
    // const loginErrorMsg = document.querySelector(".form-error-msg");
    // console.log("response KO", response);
    // toogleInvalidAlert(loginErrorMsg);
    store.dispatch(profileRejected());
  }
}

export async function updateProfile(payload) {
  const response = await modifyUserProfile(payload);
  console.log("response", response);
  if (response && response.status === 200) {
    console.log("PUT OK", response);
    const payload = {
      firstName: response.body.firstName,
      lastName: response.body.lastName,
    };
    store.dispatch(updateProfileResolved(payload));
  } else {
    console.log("PUT KO", response);
    store.dispatch(updateProfileRejected(payload));
    throw new Error(response.message);
  }
}

export async function resetOnLogout() {
  store.dispatch(resetStateAction());
}

// function toogleInvalidAlert(element) {
//   return element.style.display === "none"
//     ? (element.style.display = "flex")
//     : (element.style.display = "none");
// }
