const redirect = (req, res, next) => {
  console.log('got here!');
  // store code in memory
  process.env.code = req.query.code;
  return res.json({
    message: 'Redirect Successful',
    code: req.query.code,
  });
};

module.exports = redirect;
