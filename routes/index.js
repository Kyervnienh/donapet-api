var router = require('express').Router();

router.get('/', (req, res) => {
  res.send('welcome to donapet API');
});

router.use('/usuarios', require('./usuarios'));
router.use('/donaciones', require('./donaciones'));
router.use('/organizaciones', require('./organizaciones'));

module.exports = router;
