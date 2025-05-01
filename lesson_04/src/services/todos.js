import axios from "axios";

const API = `https://680fc8ae27f2fdac240f60df.mockapi.io/todos`;

const service = {
  get: () => axios.get(API).then(({ data }) => data),
  put: (id, obj) => axios.put(API + `/${id}`, obj).then(({ data }) => data),
  delete: (id) => axios.delete(API + `/${id}`).then(({ data }) => data),
  post: (obj) => axios.post(API, obj).then(({ data }) => data),
};

export default service;