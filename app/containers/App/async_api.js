import axios from 'axios';
import localforage from 'localforage';

const AsyncAPI = {

  async fetchBible(version) {
    const urls = {
      kjv: 'http://192.168.0.210:8000/kjv.json',
      mev: 'http://192.168.0.210:8000/mev.json',
      niv: 'http://192.168.0.210:8000/niv.json',
    };
    // const urls = {
    //   kjv: 'https://firebasestorage.googleapis.com/v0/b/bible-app-a6e33.appspot.com/o/kjv.json?alt=media&token=869f7216-edb8-4546-b54d-09ed007efe94',
    //   mev: 'https://firebasestorage.googleapis.com/v0/b/bible-app-a6e33.appspot.com/o/mev.json?alt=media&token=cddddb7d-04c0-45cc-b7d8-8fcc635932ea',
    //   niv: 'https://firebasestorage.googleapis.com/v0/b/bible-app-a6e33.appspot.com/o/niv.json?alt=media&token=4d9274e5-e5fb-4008-ba98-7d1e14037145',
    // };
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
