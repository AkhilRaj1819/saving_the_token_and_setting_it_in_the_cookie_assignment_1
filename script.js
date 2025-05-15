const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your-secret-key';

const encrypt = (payload) => {
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
  return token;
}

const decrypt = (token) => {
  const decoded = jwt.verify(token, SECRET_KEY);
  return decoded;
}

module.exports = {
  encrypt,
  decrypt
}
