//Objetivo: obtener todos los personajes

//TERMINAL
//npm init -y
//npm i express axios cors -E

//package.json
//"dev" :"nodemon app.js"

//TERMINAL
//npm run dev
const express=require("express");//requiero express
const app=express();//inicializo express
const axios =require("axios");//requiero axios
//const cors=require("cors"); //requiero cors para evitar problemas de acceso de otras rutas
const url=`http://localhost:3000/characters`//será el endpoint al cual acceder con comillas francesas para poner subrutas por cada caracters

//app.use(cors())//es un middleware con .use lo aplico a todas mis rutas
 

app.get("/",(req,res)=>{
    res.send("Funciona!")
})

app.get("/characters",async (req,res)=>{//hago un crud con Read asincrono en la ruta Characters, 
    const url=`http://localhost:3000/characters`
     axios.get( await url).then ((response)=>{
        if (response.status ===200){
            const html=response.data
            console.log(response.data)
            res.send("Funciona")
        }
    } )
})


//Creo un servidor
app.listen(3000,()=>{
    console.log(`Express escuchando en le puerto http://localhost:3000`)
})

