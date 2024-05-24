const express = require("express") ; 

const router = express.Router() ;
 
router.post("/signup" ,(req,res)=>{ 
     console.log("Singing Up") ; 
     const body = req.body ; 
     res.status(200).json(body) ;
    
});
router.post("/login" ,(req,res)=>{ 
    console.log("Succesfuly Login") ; 
   
    const body = req.body ; 
    res.status(200).json(body) ;
   
});

module.exports = router ;