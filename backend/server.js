import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectTOMongoDB from "./db/connetToMongoDB.js"
import { app, server } from "./socket/socket.js"


const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cookieParser())
app.use(express.json()) // // Middleware to parse incoming JSON requests (req.body)
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users",userRoutes)




// app.get('/', (req, res) => {
//     // root route http://localhost:5000/
//     res.send('Hello World!')
// })


server.listen(PORT, () => {
    connectTOMongoDB();
    console.log(`Server is running on port ${PORT}`)
})