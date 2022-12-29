export const initialState = {
  status: "void",
  error: null,
  user: {
    email: null,
    password: null,
  },
  token: null,
  logged: false,
};

// actions creators
export const loginFetchingAction = (userCredentials) => ({
  type: "login/fetching",
  payload: userCredentials,
});

export const loginResolvedAction = (payload) => ({
  type: "login/resolved",
  payload: payload,
});

export const loginRejectedAction = (payload) => ({
  type: "login/rejected",
  payload: payload,
});

export const profileResolved = () => ({
  type: "profile/resolved",
});

export const profileRejected = () => ({
  type: "profile/rejected",
});

export const resetStateAction = () => ({
  type: "reset",
});

export function userReducer(state = initialState, action) {
  if (action.type === "login/fetching") {
    console.log(action);
    return {
      ...state,
      status: "fetching",
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
      status: "resolved",
      token: action.payload.token,
      error: null,
    };
  }
  if (action.type === "login/rejected") {
    return {
      ...state,
      status: "rejected",
      error: action.payload.message,
    };
  }
  if (action.type === "profile/resolved") {
    return {
      ...state,
      logged: true,
    };
  }
  if (action.type === "profile/rejected") {
    return {
      ...state,
      logged: false,
    };
  }
  if (action.type === "reset") {
    return {
      ...initialState,
    };
  }

  return state;
}
