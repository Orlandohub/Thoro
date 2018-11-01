import { handleResponse } from './utils/responseHandler';
import { getCredentials } from './utils/credentials';
import moment from 'moment';

export function getTopics(category="all") {
  return getCredentials()
    .then(token => {
      return fetch(
          `https://getter.thoro.news/api/topics/${moment().format('YYYY-MM-DD')}/${category}/all/{"sort":"score"}`,
          // `https://getter.thoro.news/api/topics/2018-10-30/all/all/{"sort":"score"}`,
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