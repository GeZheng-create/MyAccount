const express = require('express');
const router = express.Router();
let db=require("../db")
router.get('/scyj2', function (request, response) {
	const sql="DG_SUBN";
	const mydata = [];
	db.query(sql,(err,rows)=>{
		if(err){
			response.json({err:"error"})
		}
		else{
			for(let em of rows)
			{
				//console.log(em);
				let record = [em['rid'], em['cust_num']];
				mydata.push(record);
			}
			console.log(mydata);
			response.writeHead(200, {
				"Content-Type": "application/json"
			});
			response.write(JSON.stringify(mydata));
			response.end();
		};
	});
});

module.exports = router;
