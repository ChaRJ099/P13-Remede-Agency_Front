// import { useState, useEffect } from "react";

const host = "http://localhost:3001/api/v1/user";

export const login = async (user) => {
    console.log("user", user);

  return await fetch(`${host}/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
        'Content-type': 'application/json',
      },
  })
    .then((response) => response.json())
    .then(({ result }) => {
      console.log("result", result);
      return result;
    });
};

export const signUp = async (user) => {
  return await fetch(`${host}/signup`, {
    method: "POST",
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then(({ result }) => {
      console.log("result", result);
      return result;
    });
};

export const profile = async (user) => {
  return await fetch(`${host}/profile`, {
    method: "POST",
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then(({ result }) => {
      //   console.log("result", result);
      return result;
    });
};

export const modifyProfile = async (user) => {
  return await fetch(`${host}/profile`, {
    method: "PUT",
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then(({ result }) => {
      //   console.log("result", result);
      return result;
    });
};
