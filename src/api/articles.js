import { handleResponse } from './utils/responseHandler';
import { getCredentials } from './utils/credentials';

export function getArticles(queryData) {
  return getCredentials()
    .then(token => {
      console.log('token on article', token);
      return fetch(
          `https://getter.thoro.news/api/article/${queryData}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
          .then(handleResponse)
    })
}