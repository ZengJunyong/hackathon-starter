module.exports = {
  db: '107.170.243.227',

  localAuth: false,
  sessionSecret: "Your Session Secret goes here",

  mailgun: {
    login: 'Your Mailgun SMTP Username',
    password: 'Your Mailgun SMTP Password'
  },

  sendgrid: {
    user: 'Your SendGrid Username',
    password: 'Your SendGrid Password'
  },

  gmail: {
    user: 'Your Gmail Username',
    password: 'Your Gmail Password'
  },

  nyt: {
    key: 'Your New York Times API Key'
  },

  lastfm: {
    api_key: 'Your API Key',
    secret: 'Your API Secret'
  },

  facebookAuth: false,
  facebook: {
    clientID: '221923001346144',
    clientSecret: '9c4e0ee8d2079825c356caf42435e9f6',
    callbackURL: '/auth/facebook/callback',
    passReqToCallback: true
  },

  linkedinAuth: true,
  linkedin: {
    clientID: '758pf4rqf55pzg',
    clientSecret: 'Ccn6EXbyNUXuto05',
    scope:        [ 'r_basicprofile', 'r_emailaddress'],
    callbackURL: 'http://107.170.243.227:3000/auth/linkedin/callback',
    passReqToCallback: true
  },

  githubAuth: false,
  github: {
    clientID: 'Your Client ID',
    clientSecret: 'Your Client Secret',
    callbackURL: '/auth/github/callback',
    passReqToCallback: true
  },

  twitterAuth: false,
  twitter: {
    consumerKey: 'Your Consumer Key',
    consumerSecret: 'Your Consumer Secret',
    callbackURL: '/auth/twitter/callback',
    passReqToCallback: true
  },

  googleAuth: false,
  google: {
    clientID: 'Your Client ID',
    clientSecret: 'Your Client Secret',
    callbackURL: '/auth/google/callback',
    passReqToCallback: true
  },

  steam: {
    apiKey: 'Your Steam API Key'
  },

  twilio: {
    sid: 'Your Account SID',
    token: 'Your Auth Token'
  },

  tumblr: {
    consumerKey: 'Your Consumer Key',
    consumerSecret: 'Your Consumer Secret',
    callbackURL: '/auth/tumblr/callback'
  },

  foursquare: {
    clientId: 'Your Client ID',
    clientSecret: 'Your Client Secret',
    redirectUrl: 'http://localhost:3000/auth/foursquare/callback'
  },

  venmo: {
    clientId: 'Your Venmo Client ID',
    clientSecret: 'Your Venmo Client Secret',
    redirectUrl: 'http://localhost:3000/auth/venmo/callback'
  },

  paypal: {
    host: 'api.sandbox.paypal.com', // or api.paypal.com
    client_id: 'Your Client ID',
    client_secret: 'Your Client Secret',
    returnUrl: 'http://localhost:3000/api/paypal/success',
    cancelUrl: 'http://localhost:3000/api/paypal/cancel'
  }
};
