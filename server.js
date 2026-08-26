import express from "express";
const Port=8080;
const app=express();

app.use(express.json())
app.use(cors())
app.listen(Port,(req,res)=>{
    console.log(`server is listenign ${Port}`);

})