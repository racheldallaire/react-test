import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('http://104.131.15.9:3030/api/users/createDummyUser', userData);
  }
}