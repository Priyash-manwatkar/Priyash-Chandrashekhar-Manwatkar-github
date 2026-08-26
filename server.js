import express from "express";
const Port=8080;
const app=express();
app.listen(Port,(req,res)=>{
    console.log(`server is listenign ${Port}`);

})