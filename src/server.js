require("dotenv").config({path:"./variable.env"})
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const request = require("request")
const http = require('http')
const jwt = require('jsonwebtoken')

const routes = require("./routes/routes")
const server = express()

server.use(bodyParser.json())
server.use(cors())
// server.use("/weexpedition", routes)
server.use("", routes)

let publicIP
request('https://api64.ipify.org?format=json', (error, response, body) => {
  if (!error && response.statusCode === 200) {
    // Analisa a resposta JSON
    const data = JSON.parse(body);

    // Extrai o endereço IP público
    publicIP = data.ip;

    startServer()
  } else {
    console.error('Erro ao obter o endereço IP público:', error);
    publicIP = undefined
    startServer()
  }
});

function startServer(){
server.listen(process.env.PORT, () => {

    const date = new Date()
    // const hour = `${date.getHours().toString().padStart(2,'0')}:${date.getMinutes().toString().padStart(2,'0')}h`
    // const fullDate = `${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2,'0')}/${date.getDate().toString().padStart(2,'0')}`
    const brasilTime = date.toLocaleString('pt-BR', { timeZone: 'America/Recife' });

    // console.log(`Serviço iniciado em http://${publicIP}:${process.env.PORT}/clients, as ${hour} - ${fullDate} \n`)
    // console.log(`Serviço iniciado em http://${publicIP}:${process.env.PORT}/clients, em ${brasilTime} \n`)
    console.log(`Serviço iniciado em http://${publicIP}:${process.env.PORT}/weexpedition, em ${brasilTime} \n`)
    
})
}


module.exports = server