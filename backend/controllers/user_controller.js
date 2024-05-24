const User  = require("../Modals/userModal") ; 
const jwt  = require("jsonwebtoken") ; 


// function to create the JWT token 

const generateToken = (_id)=>{ 
    return jwt.sign( 
        {_id}, 
        process.env.SECRET_KEY, 
        {expiresIn:"3d"}
    );
}; 

const user_signup = async(req,res)  =>{ 
    console.log("Singing Up"); 
    const {email,password} = req.body ; 
    try { 
        const user = await User.signup(email,password) ; 
        console.log('Generating token now...') ; 
        const token = generateToken(user._id) ;
        console.log('Token generated ='+token) ;
        res.status(201).json({email,token}) ; // send back email and token
        
    } catch (error) {
        res.status(400).json({error:error.message}) ;
    }
}; 

const user_login = async (req,res) =>{ 
    console.log("Logging in....") ; 
    const {email,password}  = res.body; 
    try {
        const user = await User.login(email,password) ; 
        const token  = generateToken(user._id); 
        res.status(200).json({email,token}) ;
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}; 

module.exports ={ 
    user_login,user_signup
}

