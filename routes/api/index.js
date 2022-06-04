const router = require('express').Router();

const roundRoutes = require('./roundRoutes');
const courseRoutes = require('./courseRoutes');
const holeRoutes = require('./holeRoutes');

router.use('/round', roundRoutes);
router.use('/courses', courseRoutes);
router.use('/holes', holeRoutes);

module.exports = router;
