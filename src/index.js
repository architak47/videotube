// require('dotenv').config({path: './env'});
import dotenv from "dotenv";

import mongoose from "mongoose";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./.env"
})


connectDB()
.then( () => {
    app.on("Error", (error) => {
        console.log("Error : ", error);
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port : ${process.env.PORT}`)
    })
})
.catch( (error) => {
    console.error("MongoDB connection failed !!! ", error);
    throw error;
}) 





/*
import { DB_NAME } from "./constants";


( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Err :", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("ERROR", error);
        throw error;
    }
})()

*/