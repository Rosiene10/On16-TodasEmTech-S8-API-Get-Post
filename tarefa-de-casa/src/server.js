const { response } = require('express')
const { request } = require('express')
const express=require('express')
const app=express()

app.listen(3000,()=>{
    console.log("servidor rodando")
})

app.get("/",(request,response)=>{
    response.status(200).json([{
        "mensagem":"tudo certo"
    }])
})