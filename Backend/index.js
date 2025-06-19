const express = require("express");
const app = express();
const cors = require("cors")
const PORT = 5001;
const mongoose = require("mongoose");
const actorRoutes = require("./routes/actor");

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
  res.send("Movie Actors")
})
app.use("/actors",actorRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/movieStars',{}).then(()=>console.log("DB connected"))
.catch(err =>console.error(err))

app.listen(5001,()=>{
  console.log("Making Api")
})