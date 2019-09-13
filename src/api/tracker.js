import axios from 'axios';
import { AsyncStorage } from 'react-native';

// export default axios.create({
//     baseURL: 'http://fe39c0e0.ngrok.io'
// })
const instance =  axios.create({
    baseURL: 'http://973248a4.ngrok.io'
});

instance.interceptors.request.use(
    async config => {
       const token = await AsyncStorage.getItem('token');
       if (token){
          config.headers.Authorization = `Bearer ${token}`;
       }
       return config;
    },
    error => {
        return Promise.reject(error);
        //console.log(error)
    }
);

export default instance;