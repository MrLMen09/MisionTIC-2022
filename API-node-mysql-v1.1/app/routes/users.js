const express = require("express");
const users = express.Router();

users.get("/", (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query("SELECT * FROM users", (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

users.post("/", (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO users set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            console.log("Usuario Añadido")
        })
    })
})

users.put("/:id", (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE users set ? WHERE id_user = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            console.log("Usuario Actualizado")
        })
    })
})

users.delete("/:id", (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM users WHERE id_user = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            console.log("Usuario Eliminado")
        })
    })
})

module.exports = users