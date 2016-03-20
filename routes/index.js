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
      console.log("found data from db 1");
      results.push(data);
      console.log("push data 1 to array.");
    }
  });
  db2.forEach(function(data){
    if(data.Index_num === index){
      console.log("found data from db 2");
      results.push(data);
      console.log("push data 2 to array");
    }
  });

  var jsonObject = JSON.stringify(results);

  res.contentType('application/json');
  res.send(jsonObject);

  console.log(jsonObject);
});

module.exports = router;