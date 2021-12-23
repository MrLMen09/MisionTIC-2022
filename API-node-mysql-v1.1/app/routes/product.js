const express = require("express");
const products = express.Router();

products.get("/", (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query("SELECT * FROM products", (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

products.post("/", (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO products set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            console.log("Producto Añadido")
        })
    })
})

module.exports = products
