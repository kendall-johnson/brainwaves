const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
  create,
  checkToken,
  login
}

async function create(req, res){
  try {
    const user = await User.create(req.body)
    const token = createJWT(user)
    res.json(token)
  } catch (error) {
    res.status(400).json(error)
  }
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log('req.user', req.user);
  res.json(req.exp);
}

function createJWT(user){
  return jwt.sign(
    {user},
    process.env.SECRET,
    { expiresIn: '24hr'}
  )
}

// Authenticate Helper Functions:
async function passwordCompare(password, hash) {
  // Stores outcomes of bcrypt compare:
  match = await bcrypt.compare(password, hash);
  // Returns outcome:
  return match;
}

async function login(req, res) {
  try {
          // Finds user in database:
          const user = await User.findOne({ email: req.body.email});
          // If user exists and password matches:
          if (user && passwordCompare(req.body.password, user.password)) {
              // Token that contains encoded User data:
              const token = createJWT(user);
              // Parses token to JSON:
              res.json(token);
          } else {
              // No actual error on the backend.
              // Returns 'Bad Credentials' to front end:
              res.status(400).json('Bad Credentials');
          }
  } catch (err) {
    res.status(500).json(err);
  }
}