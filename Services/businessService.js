import axios from 'axios';
import serverUrl from '../config';
module.exports.addBusiness = function(data = {}, headers = {}) {
  return new Promise(function(resolve, reject) {
    if(headers.length == 0) reject('Token missing');
    axios.post(serverUrl.url + '/api/business/add', data, headers).then(res => {
        resolve(res.data);
    }).catch(error => {
        reject(error);
    });
  })
};

module.exports.addProject = function(data = {}, headers = {}) {
  return new Promise(function(resolve, reject) {
    if(headers.length == 0) reject('Token missing');
    axios.post(serverUrl.url + '/api/project/add', data, headers).then(res => {
        resolve(res.data);
    }).catch(error => {
        reject(error);
    });
  })
};
