const { response } = require('express')
const { request } = require('express')
const express=require('express')
const app=express()

const ghiblifilmsJson=require("./models/ghiblifilms.json")

app.listen(3000,()=>{
    console.log("servidor rodando")
})

app.get("/",(request,response)=>{
    response.status(200).json([{
        "mensagem":"tudo certo"
    }])
})

app.get("/ghiblifilms",(resquest,response)=>{
    response.status(200).send(ghiblifilmsJson)
})