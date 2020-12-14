const redirect = (req, res, next) => {
  // store code in memory
  if (!req.query.code)
    return res.status(500).json({
      message: 'Invalid route',
    });
  process.env.code = req.query.code;
  return res.json({
    message: 'Redirect Successful',
    code: req.query.code,
  });
};

module.exports = redirect;
