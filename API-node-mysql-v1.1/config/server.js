const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const myconn = require("express-myconnection");
const product = require("../app/routes/product");
const sales = require("../app/routes/sales");
const users = require("../app/routes/users");
const profile = require("../app/routes/profile");
const cors = require("cors")

const app = express();

const dbConnection = 
{
    host: "sql10.freesqldatabase.com",
    user: "sql10451304",
    port: 3306,
    password: "S3nr8yY64c",
    database: "sql10451304"        
};

app.set('port', process.env.PORT || 9000);

//server running
app.listen(app.get("port"), () => {
    console.log("server is running in port ", app.get("port"));
} )
    
app.get("/", (req,res) => {
    res.send("Welcome to API")
})

app.get("/api", (req,res)=>{
    res.send("testing api")
})

app.use(myconn(mysql, dbConnection, "single"))

app.use(express.json())

app.use(cors())

app.use("/products", product)

app.use("/profile", profile)

app.use("/sales", sales)

app.use("/users", users)



module.exports = app;