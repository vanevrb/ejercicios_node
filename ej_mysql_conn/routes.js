const express = require("express");
const routes = express.Router()

routes.get("/",(req,res)=>{
    req.getConnection((err,conn) =>{
    if (err) return res.send(err)
    conn.query("SELECT * FROM numeros",(err, rows)=>{
        if(err) return res.send(err)
        res.json(rows)
    })

    })
})

routes.post("/", (req,res)=>{
    req.getConnection((err,conn) =>{
        if (err) return res.send(err)
        console.log([req.body])
        conn.query("INSERT INTO numeros set ?",[req.body],(err,rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
}
)
routes.put("/:id",(req,res)=>{
    req.getConnection((err,conn) =>{
        if (err) return res.send(err)
        console.log("valor editado:")
        console.log([req.params.id])
        console.log([req.body])
        conn.query("UPDATE numeros set ? where ID = ?", [req.body,req.params.id],(err,rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})
routes.delete("/:id",(req,res)=>{
    req.getConnection((err,conn) =>{
        if (err) return res.send(err)
        console.log("valor borrado:")
        console.log([req.params.id])
        // console.log([req.body])
        conn.query("DELETE FROM numeros where ID = ?",[req.params.id],(err,rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})
module.exports = routes;
