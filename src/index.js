import mongoose, { connect } from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path: './env'
})

connectDB()
.then( () => {
    app.listen(process.env.PORT || 3000 , () => {
        console.log(`Server is listening on ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGODB connection failed !!", err)
})



// import express from "express";
// const app = express()

// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("Error: ",error)
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`app is listenin on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.log("ERROR:", error)
//         throw err
//     }
// })



