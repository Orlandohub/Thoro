import { handleResponse } from './utils/responseHandler';
import { getCredentials } from './utils/credentials';
import moment from 'moment';

export function getTopics() {
  return getCredentials()
    .then(token => {
      return fetch(
          `https://getter.thoro.news/api/topics/${moment().format('YYYY-MM-DD')}/all/all/{"sort":"score"}`,
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