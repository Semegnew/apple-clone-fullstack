import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import bodyparser from 'body-parser'
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.SERVER_PORT;
const ip = process.env.IP_ADDRESS;
//http://192.168.1.6:4550/iphone/http://192.168.1.6:4550/iphone
//server create
const server = express();

//middleware
server.use(cors())
server.use(express.json())
server.use(bodyparser.urlencoded({ extended: true }));
server.use(bodyparser.json())

//db connection
const mysqlconn = mysql.createConnection({
    port: process.env.MYSQL_PORT,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,

//      local hosted server   ///
    // port: 3333,
    // host: 'localhost',
    // user: 'root',
    // password: '1234',
    // database: 'apple',
})

mysqlconn.connect((err)=>{
    if (err)console.log(err)
    else  console.log("DB is Connected");
})

server.get('/', (req, res) => res.end("<h1>Hi there!</h1>"));

server.get('/iphone',(req,res)=>{
    let sqlquery = `SELECT * FROM products JOIN productdescription ON products.product_id = productdescription.product_id JOIN productprice ON products.product_id =productprice.product_id;`
    
    mysqlconn.query(sqlquery,(error, results, fields) => {
        if (error) console.error(error);
        res.json(results);
        console.log(results);
        // res.end(results);
      })
    
})





server.listen(port,ip,()=>{
    console.log(`${ip}:${port}`);
})