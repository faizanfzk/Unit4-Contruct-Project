const express=require("express");


const router=express.Router();
                                                                                                                                                                                                                                                                                                                                                                                
const Checkout=require("../models/checkout.model");


router.post("",async(req,res)=>{
    try {
         
        const user=await Checkout.create(req.body);
        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
});
router.get("",async(req,res)=>{
    try {
        const user=await Checkout.find().lean().exec();
        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
});

module.exports=router;


