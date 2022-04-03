

const mongoose=require("mongoose")

const otpSchema=new mongoose.Schema({
    enterOtp:{type:Number,required:true}
},{
    versionKey:false,
    timestamps:true
})

const OTP=mongoose.model("otp",otpSchema);

module.exports=OTP