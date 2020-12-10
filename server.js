import 'babel-polyfill';
import axios from 'axios';
import formdata from 'form-data';

//create an instance of formdata. 
const data = new formdata();

//set data form fields
data.append('grant_type', 'authorization_code');
data.append(
  'code',
  'f4bd4fd14c66c2f79844098028066d98a57a62e1339a9832d72b1b1fdf3c3281',
);
data.append(
  'client_id',
  '3c67785d9cf4cad97e7a8fec4bc77c5674e77e1890d0ba86de962cacb27bf847',
);
data.append(
  'client_secret',
  'adbd135a5054ff1216100acc51f89b191e7eb94cfe38b45eb6d333675974f255',
);
data.append(
  'redirect_uri',
  'https://webhook.site/cc801071-8e12-40f0-b4e3-61cf6e22342c',
);

// Make API Call with Axios
const getBearerToken = async () => {
  try {
    const response = await axios({
      method: 'POST',
      url: 'https://api.freshbooks.com/auth/oauth/token',
      headers: {
        'Content-Type': 'application/json',
        ...data.getHeaders(), // remember to spread the headers from form data . Very important
      },
      data,
    });
    // Log
    console.log(response.data);
  } catch (error) {
    //Log any errors
    console.log(error.response.data);
  }
};

console.log(getBearerToken());
