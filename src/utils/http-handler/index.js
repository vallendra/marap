import axios from 'axios';

const instance = axios.create();

export default {
  getRequest(path, params) {
    return instance.get(path, { params });
  },
  postRequest(path, body) {
    return instance.post(path, body);
  },
  patchRequest(path, body) {
    return instance.patch(path, body);
  },
  deleteRequest(path) {
    return instance.delete(path);
  }
};