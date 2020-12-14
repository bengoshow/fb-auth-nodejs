import formdata from 'form-data';
//create an instance of formdata.
const data = new formdata();

//set data form fields
data.append('grant_type', 'authorization_code');
data.append(
  'code',
  'f4bd4fd14c66c2f79844098028066d98a57a62e1339a9832d72b1b1fdf3c3281',
);
data.append('client_id', process.env.FB_CLIENT_ID);
data.append('client_secret', process.env.FB_CLIENT_SECRET);
data.append('redirect_uri', process.env.FB_REDIRECT_URL);

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

exports.module = getBearerToken;
