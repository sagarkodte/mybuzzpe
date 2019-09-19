import axios from 'axios';
import serverUrl from '../config';
module.exports.getMainCategories = function() {
  return new Promise(function(resolve, reject) {
    axios.get(serverUrl.url + '/api/category/main').then(res => {
        resolve(res.data);
    }).catch(error => {
        reject(error);
    });
  })
};
module.exports.getSubCategories = function(path) {
  return new Promise(function(resolve, reject) {
    axios.post(serverUrl.url + '/api/category/children', {category: path}).then(res => {
        resolve(res.data);
    }).catch(error => {
        reject(error);
    });
  })
};
