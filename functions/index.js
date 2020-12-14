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
    return response.data.access_token;
  } catch (error) {
    //Log any errors
    console.log(error.response.data);
    return error.response.data;
  }
};

module.exports = { getBearerToken };
