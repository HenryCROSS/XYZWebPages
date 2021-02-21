import axios from "axios";
import { createRequest, handleResponse } from "./SERVER";

const request = createRequest("/json");

export default {
  getList: async (pagination) => {
    const resp = await request.get('/user_list.json');
    return resp;
  },
  get: async (user_id) => {
    console.log("get user by id", user_id)
    const resp = await request.get('/user_edit.json');
    return resp;
  },
  save: async(item) => {
    console.log("save item", item)
    const resp = await request.get('/success.json');
    console.log("success", resp)
    return resp
  },
  saveErrorTest: async(item) => {
    console.log("wrong save item", item)
    const resp = await request.get('/fail.json');
    return resp
  }
};
