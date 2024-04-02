const express = require ("express")
const bodyparser = require("body-parser")
const app = express()
const zod = require("zod")
const jwt = require('jsonwebtoken')
const globalSeckertkey = "UltraSecretDontDisclose_69"
const {createTodo, signupIn} = require('./type')
const {updateTodo} = require("./type");
const {Todo, User} = require("./Db/mongoDb");
const {usermid} = require("./middleware");
app.use (express.json())

app.post('/signup',(req,res)=>{
    const {username, password}= req.headers;
    const createPayload = {username:username,password:password}
    const parsePayload = signupIn.safeParse(createPayload)
    if(!parsePayload.success){
        res.status(403).json("Please give valid input")
    } else{

    User.findOne({
        username
    })
        .then((value)=>{
            if(value){
                res.status(403).json('user already present')
            } else{
                User.create({
                    username,
                    password,
                    todos:[]
                })
                    .then(()=>{
                        const token = jwt.sign({username},globalSeckertkey)
                        res.json(token)
                    })
            }
        })
}})


app.post('/signin',(req,res)=>{
    const {username, password}= req.headers;
    const createPayload = {username:username,password:password}
    const parsePayload = signupIn.safeParse(createPayload)
    if(!parsePayload.success){
        res.status(403).json("Please give valid input")
    } else{

    User.findOne({username})
        .then((value)=>{
            if(value){
                const token = jwt.sign({username},globalSeckertkey)
                res.json(token)
            }else{
                res.status(403).json("user not found")
            }
        })

}})

app.get ('/todos',usermid,(req,res)=>{
// get data from mongo db and show data
 const username = req.username
    User.findOne({username})
    .then((value)=>{
        const data = value.todos
        res.json(data)
    })
     .catch((err)=>{
         res.status(403).json(err)
     })
})

app.post ('/todos',usermid,(req,res)=>{
    const {title,description}= req.body
    const username = req.username
console.log("here")
    User.updateOne({username},{
        "$push":{
            todos:{
                title,
                description,
                completed:false
            }
        }
    })
        .then((vaue)=>{
            res.json("created success")
        })
})

app.put('/completed/:id',usermid,(req,res)=>{
const username =req.username;
const id = req.params.id;
User.updateOne({username, 'todos._id':id},{
    "$set":{
        'todos.$.completed' : true
    }
    })
    .then(()=>{
        res.json("successful")
    })

})


app.delete('/delete/:id',usermid,(req,res)=>{
const id = req.params.id
    const username = req.username
    User.updateOne({username},{
        "$pull":{
            todos:{_id:id}
        }
    })
        .then((value)=>{
            res.json(`Deleted ${id}`)
        })
        .catch((err)=>{
            res.json(err)
        })
})

app.listen(3000, (msg)=>{
    console.log("started at 3000")
})