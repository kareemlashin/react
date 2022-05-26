import axios from 'axios';

axios.interceptors.request.use(function (config) {

    // spinning start to show
    // UPDATE: Add this code to show global loading indicator
    // document.body.classList.add('loading-indicator');
        console.log('config',config)
    const token = window.localStorage.token;
    if (token) {
       config.headers.Authorization = `token ${token}`
    }
    return config
  }, function (error) {
    return Promise.reject(error);
  });
  
  axios.interceptors.response.use(function (response) {
    console.log('response',response)

    // spinning hide
    // UPDATE: Add this code to hide global loading indicator
  
    return response;
  }, function (error) {
    return Promise.reject(error);
  });