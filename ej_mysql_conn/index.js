//requires
const express = require("express");
const app = express()
const port = 3000
//mysql
const mysql = require("mysql")
const myconn = require("express-myconnection")

//metodos
const routes = require("./routes")

//datos de conexion con mysql
const db_parameters = {
    host:"localhost",
    port: 3306,
    user: 'root',
    password: '',
    database: 'bdprueba1'
}

//use
app.use(myconn(mysql,db_parameters,'single'));
app.use(express.json())
app.use("/api", routes)

app.listen(port,()=>{
    console.log(`La App esta disponble en el puerto ${port}`)
})