import User from '../schema/Product.js'



 export const addUser = async(request,response) =>{
   const user = request.body;
   console.log(user);
   const newUser = new User(user);

   try{
      await newUser.save();
       response.status(201).json(newUser);
   }catch(error){
      response.status(409).json({message:error.message});
   }
}

// addUser take two arrgument
// request response

export const getUser = async(request,response)=>{
   try{
    const user = await User.find({});
   //  console.log(user);
    response.status(200).json(user);
   }catch(error){
      response.status(404).json({message:error.message});
   }
}