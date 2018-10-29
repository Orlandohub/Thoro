import { handleResponse } from './utils/responseHandler';

export function authenticate(email, password) {
  return fetch("https://getter.thoro.news/auth/login-user", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify({ email, password })
    })
    .then(handleResponse);
}
