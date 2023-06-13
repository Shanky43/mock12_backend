const express = require("express")
const { connection } = require("./db")
const app = express()

const cors = require("cors");
const { JobsRouter } = require("./Routes/jobs.route");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use("/jobs", JobsRouter)


app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log(`Server is running at ${process.env.PORT}`)
    } catch (error) {
        console.log(`Something error happened \n Error:${error}`)
    }
})