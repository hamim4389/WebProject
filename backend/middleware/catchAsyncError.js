module.exports =  theFunc => (re, res, next)=>{
   
    Promise.resolve(theFunc(req, res, next)).catch(next);
}