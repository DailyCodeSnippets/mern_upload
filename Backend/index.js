const express = require("express");
const app = express();
const cors = require("cors")
;
require("dotenv").config();
const PORT = process.env.PORT || 5001;
const MONGO = process.env.MONGO
const mongoose = require("mongoose");
const actorRoutes = require("./routes/actor");

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
  res.send("Movie Actors")
})
app.use("/actors",actorRoutes);

mongoose.connect(MONGO,{}).then(()=>console.log("DB connected"))
.catch(err =>console.error(err))

app.listen(PORT,()=>{
  console.log("Making Api")
})