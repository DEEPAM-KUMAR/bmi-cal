const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3030,function(){
  console.log("the server started at port 3030");
})

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var wt=parseFloat(req.body.wt);
  var ht=parseFloat(req.body.ht);
  var result=wt/(ht*ht);
  res.send("THE BMI IS EQUAL TO: " +result);
});
