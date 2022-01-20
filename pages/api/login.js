export default (req,res)=>{

    if(req.method === 'POST'){
        res.setHeader("Set-cookie","a_name=Mike;Max-age=3600;HttpOnly,Secure")
        res.statusCode = 200;
        res.json({message:"ok"});
    }
}