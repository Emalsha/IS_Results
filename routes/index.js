var express = require('express');
var router = express.Router();
var db1 = require("../db/1st sem results.json");
var db2 = require("../db/2nd sem results.json");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/',function(req,res){
  var index = req.body.index;
  console.log("Requesting data : " + index);
  var results = [];

  db1.forEach(function(data){
    if(data.Index_num === index){
      results.push(data);
    }
  });
  db2.forEach(function(data){
    if(data.Index_num === index){
      results.push(data);
    }
  });

  var jsonObject = JSON.stringify(results);

  res.contentType('application/json');
  res.send(jsonObject);
});

module.exports = router;