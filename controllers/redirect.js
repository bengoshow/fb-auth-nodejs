import { getBearerToken } from '../utils';
const redirect = async (req, res, next) => {
  //check if code is empty and return a failed response
  if (!req.query.code)
    return res.status(500).json({
      message: 'Invalid route',
    });

  //call freshbooks oauth API to get Bearer Token and send in response
  const token = await getBearerToken(req.query.code);

  return res.json({
    message: 'Redirect Successful',
    code: req.query.code,
    token,
  });
};

module.exports = redirect;
