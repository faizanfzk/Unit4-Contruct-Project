
const app=require("Cult.fit-Clone-main\src\index.js");

app.listen(5000,async()=>{
    try {
        await connect();
        console.log("Listening at port 5000");
    } catch (error) {
        console.log(error.message)
    }
})

