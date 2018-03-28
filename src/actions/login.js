import axios from 'axios';

export function login(data) {
  return dispatch => {
    return axios.post ('http://104.131.15.9:3030/api/users/checkDummyUser', data);
  }
}