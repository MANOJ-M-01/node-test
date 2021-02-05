var express=require('express');
var app=express();
app.get('/',(req,res)=>{
    res.send("hai");
});
app.listen(3111);