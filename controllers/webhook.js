
const webhook = (req, res, next) => {
  /* 
    Do something here asynchronously e.g. updating local database of the client that was created
    Asynchronously so you dont tie internal updates before returning 200 OK to Freshbooks
  */
  console.log(req.body);

  return res.json({
    message: 'Received Webhook Successfully',
    data: req.body,
    token
  });
};

module.exports = webhook;
