var express = require('express');
var router = express.Router();

const mysql = require("../config/database"); // mysql 불러오기
// connection은 서버가 켜질 때 app.js 에서 실행

const mybatisMapper = require('mybatis-mapper');
var mapperName = "browseMapper";
mybatisMapper.createMapper([ __dirname +'/mapper/' + mapperName +'.xml']);



/* GET home page. */
router.get('/', function(req, res) {
	var query = mybatisMapper.getStatement(mapperName, 'testBasic');

	mysql.query(query, (err, rows) => {
		if(err) throw err;

		console.log( {data: rows} );

		res.render('browse', {data: rows});
	})
});

router.post('/getData', function(req, res, next) {
	var param = req.body.param;

	var paramJson = { "ord" : param };

	var query = mybatisMapper.getStatement(mapperName, 'ajaxTest', paramJson);
	//첫번째는 xml의 name값, 두번째는 해당 xml의 id값, 세번째는 파라미터, 마지막은 포맷이다.

	mysql.query(query, (err, results, fields) => {
		if(err) {
			console.log(err);
		}

		console.log( results );
		
		res.send( results );
	})
	mysql.end();
})

module.exports = router;




