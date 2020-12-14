const redirect = (req, res, next) => {
  console.log('code --> ', req.query.code);
  return res.json({
    message: 'Redirect Successful',
    code: req.query.code,
  });
};

module.exports = redirect;
