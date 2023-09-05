const VersionService=require('../services/versionsService');

exports.versionsController = (req,res,next)=>{
   VersionService.versionsService(req)
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