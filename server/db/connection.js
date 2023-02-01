const mongoose=require("mongoose");

mongoose.connect('mongodb://localhost:27017/mernproject')  

.then(()=>{
             console.log("connected to mongodb server")
          })

.catch(()=>{
             console.log("Not connected to mongodb server")
           })