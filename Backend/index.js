const express=require('express')
const app=express()
const mongoodb=require('./db')
mongoodb()
const abc=require("./Routes/Createuser")
//const cors=require('cors')
//console.log(app);

app.use((req,res,next)=>{
   res.setHeader("Access-Control-Allow-Origin","eatindia-akshat-kumar-guptas-projects.vercel.app")
   res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
   );
   next();
})

// app.use(cors(
//     {
//         origin:["eatindia-akshat-kumar-guptas-projects.vercel.app"],
//         methods:["POST","GET"],
//         credentials:true
//     }
// ))

app.get('/funny',(req,res)=>{
    res.send('Hahahaha')
})
app.use(express.json())       ////Its used to make available json format input taken from client side(thunderclient/postman) into req.body;
app.use('/api',abc)
app.use('/api',require('./Routes/Displaydata')); 
app.use('/api',require('./Routes/OrderData'))

app.listen(5000);