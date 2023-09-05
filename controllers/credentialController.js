const CredentialService = require('../services/credentialService');

exports.credentialController = (req,res,next)=>{
    CredentialService.credentialService(req.body)
    .then((response)=>{
        if(!response.status){
            throw new Error(response.message); 
        }     
        res.status(200).json({
            response: response.data
        })
    })
    .catch((err)=>{
        console.log(err);
        res.status(401).json({
            status: false,
            message: err.message
        })
    }) 
}