
const mongoose=require("mongoose");

const checkoutSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:false},
    address:{type:String,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
    zip:{type:Number,required:true},
    phone:{type:Number,required:true},
    email:{type:String,required:true}

},{
    versionKey:false,
    timestamps:true
})
const Checkout=mongoose.model("checkout",checkoutSchema)
module.exports=Checkout;