const express = require("express")
const dotenv = require("dotenv")

dotenv.config();
const app = express()

const PORT = process.env.PORT || ;

app.get('/', (req, res)=>{
    // root route http://localhost:5000/
    res.send('Hello World!')
})








app.listen(PORT, console.log(`Server is running on port ${PORT}`))