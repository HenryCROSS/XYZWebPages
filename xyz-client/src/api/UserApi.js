import axios from "axios";
import { createRequest, handleResponse } from "./SERVER";

const request = createRequest("/json");

export default {
  getList: async (pagination) => {
    const resp = await request.get('/user_list.json');
    return resp.data;
  },
  get: async (user_id) => {
    const resp = await request.get('/user_edit.json');
    return resp.data;
  },
  save: async(item) => {
    const resp = await request.get('/success.json');
    return resp.data
  }
};
