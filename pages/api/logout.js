export default (req,res)=>{
    res.setHeader("Set-cookie","a_name=Mike;Max-age=0;HttpOnly,Secure")
    res.statusCode = 200;
    res.json({message:"ok"});
}