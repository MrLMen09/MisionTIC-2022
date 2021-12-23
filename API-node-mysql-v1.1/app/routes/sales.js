const express = require("express");
const sales = express.Router();

sales.get("/", (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query("SELECT * FROM sales", (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

sales.post("/", (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO sales set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            console.log("Producto Añadido")
        })
    })
})

module.exports = sales 