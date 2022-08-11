/*
mport React from 'react';
import axios from 'axios';

const apiUrl = 'https://127.0.0.1:6666';
const axiosApiInstance = axios.create();


axios.interceptors.request.use(
    config => {
      const { origin } = new URL(config.url);
      const allowedOrigins = [apiUrl];
      const jwt = localStorage.getItem('jwt');
  
      if (allowedOrigins.includes(origin) && jwt) {
        config.headers.Authorization = `Bearer ${jwt}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

function jwt(){
    const storedJwt = localStorage.getItem('jwt');
    const [jwt, setJwt] = useState(storedJwt || null);
    const [fetchError, setFetchError] = useState(null);
    const getJwt = async () => {
        const { data } = await axios.get(`/jwt`);
        setJwt(data.jwt);
      }
      
}


function issueToken() {
    return new Promise((resolve, reject) => {
      return client({
        ...
      }).then((response) => {
        resolve(response);
      }).catch((err) => {
        reject(err);
      });
    });
  }
  
  client.interceptors.request.use((config) => {
    let originalRequest = config;
    if (tokenIsExpired && path_is_not_login) {
      return issueToken().then((token) => {
        originalRequest['Authorization'] = 'Bearer ' + token;
        return Promise.resolve(originalRequest);
      });
    }
    return config;
  }, (err) => {
    return Promise.reject(err);
  });
*/