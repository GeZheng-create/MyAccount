const express=require("express");
const bodyparser=require("body-parser");
const cors=require("cors");
const db=require('./query'); 
//our all the query connections are there in query.js
const path = require('postgres://smuxquhpinqfsz:a081596fd84dc10418c899776022b6a485e88517c866129def482a9db5a34e97@ec2-3-220-23-212.compute-1.amazonaws.com:5432/delfk4ric3j52n');
const app=express();

var distDir = __dirname + "/dist/";
app.use(express.static(__dirname + '/public'));
app.use(express.static(distDir));
const port = process.env.PORT || 5432; // port no. 


const Pool=require('pg').Pool 
const pool=new Pool({
user:'smuxquhpinqfsz',
host:'ec2-3-220-23-212.compute-1.amazonaws.com',
database:'delfk4ric3j52n',
password:'a081596fd84dc10418c899776022b6a485e88517c866129def482a9db5a34e97',
port: 5432,
});