import { handleResponse } from './utils/responseHandler';
import { getCredentials } from './utils/credentials';

export function getArticles(topicsData, data) {
  return getCredentials()
    .then(token => {
      console.log('token on article', token);
      return fetch(
          `https://getter.thoro.news/api/article/${
            topicsData.data[0].articles[0]
          }`,
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