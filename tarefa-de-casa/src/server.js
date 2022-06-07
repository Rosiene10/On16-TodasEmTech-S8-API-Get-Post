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

app.get("/ghiblifilms/buscar/:id",(request,response)=>{
    let idResquest=request.params.id
    let filmeEncontrado=ghiblifilmsJson.find(ghiblifilms=>ghiblifilms.id==idResquest)

    response.status(200).send(filmeEncontrado)
})


app.post("/ghiblifilms/criar", (request, response) => {

    let nomeRequest = request.body.name
    let tipoRequest = request.body.type
    let estatisticasRequest = request.body.stats
  
    let novoghiblifilms = {
      id: (ghiblifilmsJson.length) + 1,
      name: nomeRequest,
      type: tipoRequest,
      stats: estatisticasRequest
    }
  
    ghiblifilmsJson.push(novoghiblifilms)
  
    response.status(201).json(
      [{
        "mensagem": "Seu ghiblifilms foi cadastrado",
        novoghiblifilms
      }]
    )
  })