import axios from "axios";

import nprogress from "nprogress";

import { getToken } from "@/utils/token.js";

import "nprogress/nprogress.css";
// import { Message } from "element-ui";
//利用axios的、对象的create方法，去创建一个实例
const http = axios.create({
  // baseURL: import.meta.env.VUE_APP_BASE_API, //请求路径
  baseURL: 'http://localhost:8083', //请求路径
  timeout: 5000, //超时时间
});

//请求拦截器
http.interceptors.request.use(
  (config) => {
    //在发送请求之前做点什么事
    nprogress.start(); //进度条开始

    // 判断是否存在token,如果有token该怎么做
    if (getToken()) {
      config.headers["token"] = getToken(); //在请求头添加token
    }
    return config;
  },
  (error) => {
    //如果请求失败做点什么事
    return Promise.reject(error); //返回失败信息
  }
);

//响应拦截器
http.interceptors.response.use(
  // 如果你想获取http信息，比如请求头或状态请返回respone=>response

  /**
   * 1.通过自定义状态码确定请求状态
   * 2.这里只是一个例子
   * 3.也可以通过http状态码来判断
   */

  (response) => {
    nprogress.done(); //进度条结束
    let res = response.data; //获取返回的结果
    if (res.code ==  -1) { //如果返回的结果不是200的话，则提示对应信息
      // Message({
      //   message: res.message || "error",
      //   type: "error",
      //   duration: 5 * 1000,
      // });
      alert(res.message || "error");
    }

    //如果状态码为其他的 ，比如500 401.... 这里只做一个示例，具体看接口返回的数据
    if (res.code == 500 || res.code == 401) {
      Message({
        message: res.message || "error",
        type: "error",
        duration: 5 * 1000,
      });
      return Promise.reject(new Error(res.message || "error"));
    } else {
      return res.data;
    }
  }
);

export default http;
