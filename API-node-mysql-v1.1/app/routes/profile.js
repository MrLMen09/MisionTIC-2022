const express = require("express");
const profile = express.Router();

profile.get("/:email", (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        conn.query(`SELECT * FROM users WHERE email = ?`, [req.params.email], (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })

        
    })
})

module.exports = profile