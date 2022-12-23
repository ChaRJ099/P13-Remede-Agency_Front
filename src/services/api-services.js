// import { useState, useEffect } from "react";

const host = "http://localhost:3001/api/v1/user";

export const userLogin = async (user) => {

  return await fetch(`${host}/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
        'Content-type': 'application/json',
    },
  })
  .then((response) => response.json())
  .then((response) => {
  console.warn("result userLogin", response);
    return response;
  });
};


export const userSignUp = async (user) => {
  return await fetch(`${host}/signup`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json',
    },
  })
  .then((response) => response.json())
  .then((response) => {
    console.warn("result userSignUp", response);
    return response;
  });
};

export const userProfile = async (token) => {
  return await fetch(`${host}/profile`, {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
      'Authorization': token
    },
  })
  .then((response) => response.json())
  .then((response) => {
      console.log("result userProfile", response);
    return response;
  });
};

export const modifyUserProfile = async (user) => {
  return await fetch(`${host}/profile`, {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer my-token',
    },
  })
  .then((response) => response.json())
  .then(({ result }) => {
    //   console.log("result", result);
    return result;
  });
};
