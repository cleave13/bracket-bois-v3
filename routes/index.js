const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// Catch-all route in case the user tries to access something other than the API route
router.use((req, res) => res.send('This app only supports api routes. Be sure the request is sent to {PORT}/api/'));

module.exports = router;
