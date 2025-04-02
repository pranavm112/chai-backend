//require('dotenv'.config({path: './env'}))

import dotenv from "dotenv"

//import mongoose, { connect } from "mongoose"
//import { DB_NAME } from "./constants.js"
import connectDB from "./db/index.js"

dotenv.config({
    path: "./env"
})

connectDB()




/*
import express from "express"
const app = express

//function connectDB() {}    //1st approach
//connectDB()

;( async() => {
    try{
       await  mongoose.connect(`${process.env.MONGODB_URI}`/`${DB_NAME}`)
       app.on("error", (err) => {
        console.log("ERR:", error);
        throw error
       })

       app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
       });

    }
    catch(error) {
        console.error("ERROR:or", err)
        throw err
    }
})()
*/