import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectTOMongoDB from "./db/connetToMongoDB.js"


const app = express()
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()) // // Middleware to parse incoming JSON requests (req.body)
app.use("/api/auth", authRoutes)




// app.get('/', (req, res) => {
//     // root route http://localhost:5000/
//     res.send('Hello World!')
// })


app.listen(PORT, () => {
    connectTOMongoDB();
    console.log(`Server is running on port ${PORT}`)
})