const express = require("express");
const router = express.Router();
const {getAllUsers, getUserById} = require('../../Controller/users')


router.get("/", (req,res) => {
    fs.readFile('sample.txt' , "utf-8", (err,data) =>{
if (err){
    res.status(400),json({message: "error in reading"})
}
 res.status(200).json({message: "hello there", data}) 
})
})
    
    router.get("/users", getAllUsers)
    
    
    
    router.get("/users/:id",getUserById );

    
    
    
    
    
    router.post("/home", (req, res)=>{
        console.log(req.body);
        res.send({message: "success body", body: req.body});
    })
    
    module.exports = router; 

  
    