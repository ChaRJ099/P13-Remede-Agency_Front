const host = "http://localhost:3001/api/v1/user";

/**
 * API call / POST method to allow the user to log in
 * @param {{
 *  email: string,
 *  password: string
 * }} user
 * @returns response
 */
export const userLogin = async (user) => {
  return await fetch(`${host}/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};

/**
 * API call / POST method to allow the user to sign up
 * @param {{
 *  email: string,
 *  password: string
 * }} user
 * @returns response
 */
export const userSignUp = async (user) => {
  return await fetch(`${host}/signup`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};

/**
 * API call / POST method to allow the user to access his dashboard
 * @param { string } token
 * @returns response
 */
export const userProfile = async (token) => {
  return await fetch(`${host}/profile`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};

/**
 * API call / PUT method to allow the user to update their personal information
 * @param {{
 *  user : {
 *    firstName: string,
 *    lastName: string,
 *    token: string
 * }}} payload
 * @returns response
 */
export const modifyUserProfile = async (payload) => {
  const user = {
    firstName: payload.user.firstName,
    lastName: payload.user.lastName,
  };
  const token = payload.user.token;
  return await fetch(`${host}/profile`, {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};
