import 'babel-polyfill';
import formdata from 'form-data';
import api from './fresbhooksApi';
import 'dotenv/config';

//create an instance of formdata.
const data = new formdata();

// Make API Call with Axios
const getBearerToken = async code => {
  console.log(process.env.FB_CLIENT_SECRET);
  //set data form fields
  data.append('grant_type', 'authorization_code');
  data.append('code', code);
  data.append('client_id', process.env.FB_CLIENT_ID);
  data.append('client_secret', process.env.FB_CLIENT_SECRET);
  data.append('redirect_uri', process.env.FB_REDIRECT_URL);

  try {
    const response = await api({
      method: 'POST',
      url: 'auth/oauth/token',
      headers: {
        'Content-Type': 'application/json',
        ...data.getHeaders(), // remember to spread the headers from form data . Very important
      },
      data,
    });
    return response.data.access_token;
  } catch (error) {
    //Log any errors
    console.log('error --> ', error.response.data || error);
    return error.response.data;
  }
};

module.exports = getBearerToken;
