import { getBearerToken } from '../utils';
const redirect = async (req, res, next) => {
  // store code in memory
  if (!req.query.code)
    return res.status(500).json({
      message: 'Invalid route',
    });
  process.env.code = req.query.code;
  const token = await getBearerToken(req.query.code);
  return res.json({
    message: 'Redirect Successful',
    code: req.query.code,
    token,
  });
};

module.exports = redirect;
