import axios from 'axios';
import localforage from 'localforage';

const API = {

  async fetchBible(version) {
    const response = await axios.get(`http://localhost:8000/${version}.json`);
    return response;
  },

  async storeBible(version, data) {
    const response = await localforage.setItem(version, data);
    return response;
  },

  async loadBible(version) {
    const response = await localforage.getItem(version);
    return response;
  },

};

export default API;
