import axios from "axios";

let SERVER = "http://localhost:3000";
let PORTAL_SERVER = "http://localhost:8000";

 
if (process.env.BUILD_FOR == "dev") {
  SERVER = "http://localhost:3000";
  PORTAL_SERVER = "http://localhost:3000"; 
}
if (process.env.BUILD_FOR == "live") {
  SERVER = "http://localhost:3000";
  PORTAL_SERVER = "http://localhost:3000"; 
}

const timeout = 100000;

const USER_KEY = "123456mysecret";
export { USER_KEY };

const { token } = JSON.parse(localStorage.getItem(USER_KEY) || "{}");

const headers = {
  Authorization: token ? `Bearer ${token}` : "",
};

const createRequest = (defaultRoute) => {
  axios.defaults.params={m:Math.random(),t:new Date().getTime()}
  const request = axios.create({
    baseURL: SERVER + defaultRoute,
    timeout,
    headers,
  });

  request.interceptors.request.use((req) => {
    const { token } = JSON.parse(localStorage.getItem(USER_KEY) || "{}");
    req.headers.Authorization = token ? `Bearer ${token}` : "";
    req.headers['Cache-Control']='no-cache';
    
    
    return req;
  });

  request.interceptors.response.use(
    (response) => {
      if (response?.data?.invalid) {
        throw new Error((response.data.messages).join('\n'))
      }
      return response;
    },
    (error) => {   
      if (error) {
        if (error?.response?.status == 403) {
          window.location.replace("/admin");
        }
      }
    }
  );

  return request;
};

const handleResponse = response => {
  // if (!response.ok) {
  //   return Promise.reject({
  //       message: response.statusText
  //   });
  //     // // turn 4xx errors into front-end execption
  //     // return response.text().then(text => {

  //     //     let data
  //     //     try {
  //     //         data = text && JSON.parse(text);
  //     //     } catch (error) { 
  //     //         data = {}
  //     //     }

  //     //     if (response.status === 401) {
  //     //         // auto logout if 401 response returned from api
  //     //     }
          
  //     //     // if no customized error message, use statusText         
  //     //     return Promise.reject({
  //     //         message: data && data.error || response.statusText,
  //     //         ...data
  //     //     });
  //     // })

  // } else {
  //   return Promise.resolve(response)
  // }
}

export { SERVER, timeout, headers, PORTAL_SERVER, createRequest, handleResponse};
