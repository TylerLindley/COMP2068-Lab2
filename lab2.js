'use strict';
var express = require('express');
var router = express.Router();
var x = 0;
var y = 0;

/* GET subject listing. */
router.get('/', function (req, res) {
    x = parseInt(req.query.x)
    y = parseInt(req.query.y)
        
    if (req.query.method=="add")
        res.send((x+y).toString());
    else if (req.query.method=="divide")
        res.send((x/y).toString());
    else if (req.query.method=="subtract")
        res.send((x-y).toString());
    else if (req.query.method=="multiply")
        res.send((x*y).toString());
    else
        res.send('Error! Method unknown! Please do "Add"/"Subtract"/"Multiply" or "Divide"');
});

module.exports = router;
