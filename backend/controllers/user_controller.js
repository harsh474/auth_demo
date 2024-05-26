const User  = require("../Modals/userModal") ; 
const jwt  = require("jsonwebtoken") ; 

// function to create the JWT token 

const generateToken = (_id,email,password)=>{ 
    return jwt.sign( 
        {_id,email,password}, 
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
        const token = generateToken(user._id,email,password) ;
        console.log('Token generated ='+token) ;
        // res.status(201).json({email,token}) ; // send back email and token
        res.cookie('token', token).status(200).json({ email, token }); // Optionally send back email and token in the response body as well

        
    } catch (error) {
        res.status(400).json({error:error.message}) ;
    }
}; 

const user_login = async (req,res) =>{ 
    console.log("Logging in....") ; 
    const {email,password}  = req.body; 
    try {
        const user = await User.login(email,password) ; 
        // const token  = generateToken(user._id); 
        const token = generateToken(user._id,email,password) ;

        // res.status(201).json({email,token}) ; 
        // res.status(201).json({hi:123,krish:1234})
        res.cookie("TOKEN", token).status(210).json({ email, token }); // Optionally send back email and token in the response body as well
        // res.status(200).json({ email, token }); // Optionally send back email and token in the response body as well
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}; 

module.exports ={ 
    user_login,user_signup
}

