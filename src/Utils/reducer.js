// actions.js
export const PLAY_PAUSE = "playPause";
export const RESTART = "restart";
export const POINT_SCORED = "pointScored";

export const initialState = {
  status: "void",
  data: null,
  error: null,
  user: {
    email: null,
    password: null,
  },
  token: null,
};

// actions creators
export const loginAction = (userCredentials) => ({
  type: "login",
  payload: userCredentials,
});

export const loginResolvedAction = (token) => ({
  type: "login/resolved",
  payload: token,
});

export const loginRejectedAction = (error) => ({
  type: "login/rejected",
  payload: error,
});

// export async function fetchLogin(store) {
//   const status = store.getState().status;
//   const user = store.getState().user;
//   if (status === "pending" || status === "updating") {
//     return;
//   }
//   if (user.email === null || user.password === null) {
//   }
//   store.dispatch(loginFetchingAction());
//   try {
//     //@TODO : créer fetch post
//     const host = "http://localhost:3001/api/v1/user";
//     const response = await fetch(`${host}/login`, {
//       method: "POST",
//       body: JSON.stringify(user),
//       headers: {
//         "Content-type": "application/json",
//       },
//     });

//     const data = await response.json();
//     store.dispatch(loginResolvedAction(data));
//   } catch (error) {
//     store.dispatch(loginRejectedAction(error));
//   }
// }

// le reducer est une fonction

//@TODO : add status
export function userReducer(state = initialState, action) {
  if (action.type === "login") {
    console.log(action);
    return {
      ...state,
      user: {
        ...state.user.email,
        email: action.payload.email,
        ...state.user.password,
        password: action.payload.password,
      },
    };
  }
  if (action.type === "login/resolved") {
    return {
      ...state,
      token: action.payload,
    };
  }
  if (action.type === "login/rejected") {
    return {
      ...state,
      error: action.payload.error,
    };
  }
  // sinon on retourne le state sans le changer
  return state;
}
