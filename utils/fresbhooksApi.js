import axios from 'axios';
import 'dotenv/config';

const baseURL = process.env.FB_BASE_URL;

module.exports = axios.create({
  baseURL,
  headers: {
    'Cache-Control': 'no-cache',
  },
});
