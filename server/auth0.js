const { expressjwt } = require('express-jwt')
const jwks = require('jwks-rsa')

const domain = 'https://roa22-tomas.au.auth0.com'
const audience = 'https://seasoned/api'

const checkJwt = expressjwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`,
  }),
  audience: audience,
  issuer: `${domain}/`,
  algorithms: ['RS256'],
})

module.exports = checkJwt
