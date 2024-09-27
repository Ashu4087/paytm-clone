import jwt from 'jsonwebtoken'


const authMiddleWare = async (req, res, next) =>{
    const {authorization} = req.header;

    if(!authorization) {
        res.status(400).json({message: "Authorization required"})
    }
    const token = authorization.split(" ")[1];

    try{
        const {_id} = jwt.verify(token, process.env.SECTRETKEY);
        // req.user = User.findOne({})
        next();

    } catch(e) {
        res.json({error: e});
    }

}

export default authMiddleWare;