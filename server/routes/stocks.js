import express from 'express';
const router = express.Router();
const path = require('path');

var fs = require('fs');
var parse = require('csv-parse');
var async = require('async');
const csv=require('csvtojson');

import Stock from '../models/stocks';



router.get('/',(req,res)=>{
	const sym=req.query.symbol;

	Stock.find({ symbol:sym}).then(stock=>{
			res.json(stock);
		});

});

router.get('/allsymbols',(req,res)=>{
	Stock.find().distinct('symbol', function(error, symbol) {
    res.json({symbol})
});


});



export default router;

