require('dotenv').config();

let mysql = require('mysql');
let pool = mysql.createPool({
  host : process.env.HOST,
  user : process.env.USER_S,
  password : process.env.PASSWORD,
  database : process.env.DATABASE,
  multipleStatements: false
});

let express = require('express');
let router = express.Router();

// 輸入keyword
// 輸出Class.CName, Sentence.JText, Sentence.Start, Sentence.Duration
router.get('/getSentenceByKeyword', function(req, res, next) {

    let p1 = '%' + req.query.keyword + '%';
    
    pool.getConnection(function(err, connection){
        if(err){console.log(err); res.send('sql connect error');}

        let myparams = [p1];
        let querystr = "select c.CName, s.JText, s.Start, s.Duration from sentence s, co, class c where s.JText like ? and s.SID=co.OID and co.CID=c.CID";
        connection.query(querystr, myparams, function(err, result){
            if(err){console.log(err); res.send('sql query error');}
            res.send(result);
            connection.release();
        })
    });
});

module.exports = router;