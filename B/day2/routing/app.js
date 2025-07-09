const express = require('express');
const app = express();
let PORT = 8080;

// //Middleware
// app.use((req,res)=>{
//     res.send("<h1> i am a middleware</h1>")
// })



//routing
// app.get('/signup',(req,res)=>{
//     res.send("<h1> i am get method</h1>")
// })



//path parameter
app.get('/r/:anything',(req,res)=>{
    console.log(req.params);
    console.log(req.params.anything);
    let{anything}= req.params
    res.send(`<h1> my favourite song is ${anything}`)
    
   // http://localhost:8080/r/justinbieber
})



//query parameter
app.get('/search',(req,res)=>{
    console.log(req.query)
    console.log(req.query.movie);

    let{movie}=req.query
    res.send(`<h1> my favourite movie is ${movie}`)

    //http://localhost:8080/search/?movie=avengers
})




app.listen(PORT,()=>{
    console.log(`server is connected to ${PORT}`);
})