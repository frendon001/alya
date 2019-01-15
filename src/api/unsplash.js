import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 2fdf813f58b790c9c48c8ea7a470257cad477334246a1a4a2f242d15879a416e'
  }
});
