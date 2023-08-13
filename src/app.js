import express from "express"; 
import HamzaRouter from "./router/student.js";
const app = express();

app.get("/",(req,res)=>{
   return res.json({message:"Hello World"});
});

app.use(HamzaRouter);

app.listen(3301,()=>{
    console.log("Listening on 3301");
});
