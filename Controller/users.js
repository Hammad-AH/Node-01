let user01 ={
    name:"hammad",
    id:1,
    email:"hammad@example.com",
    contact:"03035912244"
    }
    let user02 ={
        name:"ubaid",
        id:2,
        email:"ubaid@example.com",
        contact:"03121047036"
        }
        let user03 ={
            name:"faiz",
            id:3,
            email:"faiz@example.com",
            contact:"03173734451"
            }
    let user04 ={
        name:"hadi",
        id:4,
        email:"hadi@example.com",
        contact:"03035912224"
        }
        let user05 ={
            name:"ibrahim",
            id:5,
            email:"ibrahim@example.com",
            contact:"03121117682"
            }
    
    let users = [user01,user02,user03,user04,user05];
   

    const getAllUsers = (req,res)=>{
        let{email, name} = req.query;
      
      let searchUser = users;
      if(email || name){
        searchUser = users.filter((user)=>{
            if(user.email == email && user.name == name){
                return user;
            }
         return false;
    
        })
    }
         res.status(200).json({message:"success", data:searchUser})
    }


    const getUserById =(req,res)=>{
        let id = req.params.id;
        let findUser = users.filter((user)=>{
            if(user.id == id){
                return user
            }
        })
        res.status(200).json({user:findUser})
    }

















    module.exports = {getAllUsers, getUserById}