const express = require('express')
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express();

app.use(cors());

app.use(express.json())

app.get("/"  , (req , res) =>{
    res.send("Server has started and it's time to begin the AI powered code rev");
})

app.use("/ai" , aiRoutes);
module.exports = app;