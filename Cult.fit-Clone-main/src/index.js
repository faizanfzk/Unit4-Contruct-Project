const express=require("express");

const app=express();
app.use(express.json());

const checkoutController=require("Cult.fit-Clone-main\src\controller\checkout.controller.js")

app.use("/checkouts",checkoutController)



module.exports=app;