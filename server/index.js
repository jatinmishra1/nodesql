const express=require("express")
const app=express();
const db=require("./models")
const cookieParser=require("cookie-parser")

app.use(express.json())
//if you will not use then when you will send the data from client side then you will not able to get here by req.body
//basically it will show undefined ,so thats why we use express.json(),as we send data in the json format ,as you can see
//i the postman
app.use(cookieParser())


//router routes
const postRoutes=require("./routes/posts")
app.use("/posts",postRoutes)

const userRoutes=require("./routes/user")
app.use("/user",userRoutes)


db.sequelize.sync({}).then(()=>{
    app.listen(8000,()=>{
        console.log("server started")
    })
})
