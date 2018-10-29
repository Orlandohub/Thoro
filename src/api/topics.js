import { handleResponse } from './utils/responseHandler';
import { getCredentials } from './utils/credentials';

export function getTopics() {
  return getCredentials()
    .then(token => {
      return fetch(
          'https://getter.thoro.news/api/topics/2018-10-25/all/all/{"sort":"score"}',
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        .then(handleResponse);
    })
}