var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')
var bcrypt = require('bcrypt')
var cookies = require('cookies')

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex.raw(`SELECT * FROM users`)
  .then(function(data){

  res.render('users', {title: 'info', temp: data.rows})

  })
});

router.get('/create', function(req,res,next){
  res.render('create')
})

router.post('/create/new', function(req,res,next){
  if(req.body.password === req.body.verify){
    bcrypt.hash(req.body.password, 8, function(err, hash){
    knex.raw(`INSERT INTO users (username, password, ff, lff) VALUES ('${req.body.username}', '${hash}', '${req.body.Favorite_Food}', '${req.body.Least_Favorite_Food}')`)
    .then(function(data){
    res.cookie('username', 'temp' )
    res.render('users', {username: req.body.username})
    })
})

}else{
  res.redirect('/')
}
})

module.exports = router;
