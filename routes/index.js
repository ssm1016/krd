var express = require('express');
var router = express.Router();

const mysql = require("../config/database"); // mysql 불러오기
// connection은 서버가 켜질 때 app.js 에서 실행

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
