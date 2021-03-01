var router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('welcome to donapet API');
})

router.use('/usuarios', require('./usuarios'));

module.exports = router;