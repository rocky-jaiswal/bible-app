import axios from 'axios';
import localforage from 'localforage';

const AsyncAPI = {

  async fetchBible(version) {
    const urls = {
      kjv: 'http://localhost:8000/kjv.json',
      mev: 'http://localhost:8000/mev.json',
      niv: 'http://localhost:8000/niv.json',
    };
    const response = await axios.get(urls[version]);
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

export default AsyncAPI;
