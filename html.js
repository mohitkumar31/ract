const express = require('express');

const app = express()
const collection = require ("./mongo");

const http = require('http')
const fs = require('fs')
const fileContent = fs.readFileSync('index.html')

const server = http.createServer((req, res)=>{
res.writeHead(200, {'Content-type': 'text/html'});
res.end(fileContent)
})

server.listen(8000, '127.0.0.1', ()=>{
  console.log("Listening on port ")
})

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.post("/submit",async(req,res)=>{
  try { 

    const newSchema = new mongoose.Schema({
      name:req.body.name,
      designation:req.body.designation,
      place:req.body.place,
      purpose:req.body.purpose,
      dateOfVisit:req.body.dateOfVisit,
      vehicle:req.body.vehicle,
      official:req.body.official,
      personal:req.body.personal,
      SignatureDept:req.body.SignatureDept,
      signaturePresident:req.body.signaturePresident,
      Remarks:req.body.Remarks



    })
    const collection = await newSchema.save();
    res.status(201).render(index)
    
  } catch (error) {
    res.status(400).send(error);
}
})