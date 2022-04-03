const mongoose=require("mongoose");

module.exports=()=>{
    return mongoose.connect("mongodb+srv://faizanfzk:faizan123@cluster0.0wsaj.mongodb.net/UnitProject?retryWrites=true&w=majority")
}