const express = require('express');
const app = express();
let PORT = 8080;
app.use(express.json())


let users = [];
let currentID = 1;

app.get('/users',(req,res)=>{
    
    res.send(users)
})

app.post('/signup',(req,res)=>{
    let{name,email,password} = req.body;
    const newUser = {
        id : currentID++,
        name,
        email,
        password
    }
    users.push(newUser); // to push data  into the array
   // res.send(newUser);
    res.status(200).json({
        message : "User created successfully",
        newUser
    })
})


app.put('/user/:id',(req,res)=>{
    let{id} = req.params;
    let{name,email,password} = req.body;
    const user = users.find((u) => u.id === parseInt(id));
    if(!user){
        res.status(404).json({
            message:"User Not Found"
        })
    }
    user.name=name;
    user.email=email;
    user.password=password;

    res.status(200).json({
        message:"User Data Updated Successfully",
        user
    })
})


app.delete('/user/:id',(req,res)=>{
    let id = req.params.id;
    let user = users.findIndex((u)=> u.id === parseInt(id));

    if(user === -1){
        res.status(404).json({message:"user not found"});
    }
    users.splice(user, 1);
    res.status(200).json({
        message: "user deleted successfully",
    })
})

app.listen(PORT,()=>{
    console.log(`server is connected to ${PORT}`);
})