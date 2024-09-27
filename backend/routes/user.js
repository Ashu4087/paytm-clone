import express from 'express'
import zod from 'zod';
import User from '../model/users.js';
import jwt from 'jsonwebtoken';
import { parse } from 'dotenv';

const router = express.Router();

const createToken = (_id) =>{
    return jwt.sign({_id}, process.env.SECTRETKEY, {expiresIn: '3d'});
}

const signUpSchema = zod.object({
    username: zod.string(),
    firstname: zod.string(),
    lastname: zod.string(),
    password: zod.string().min(6)
});

const signInSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
})

router.post("/signup", async (req, res) =>{
    const body = req.body;
    const parsedBody = signUpSchema.safeParse(body);
    if(parsedBody.error) {
        return res.json({
            error: parsedBody.error,
        })
    }
    const user = User.findOne({
        username:parsedBody.username
    });

    if(user._id) {
        return res.json({
            message: "User already exits",
        });
    }

    const dbUser = await User.create({
        ...parsedBody
    });

    const token = createToken(user._id);

    res.json({
        message: "user created successfully",
        username: parsedBody.username,
        token: token
    });


});

router.post("/signin", async (req, res)=>{
    const body = req.body;
    const parsedBody = signInSchema.safeParse(body);

    if(parsedBody.error) {
        res.json({error: parsedBody.error});
    }

    try{
        const dbUser = await User.findOne({username: parsedBody.username, password: parsedBody.password});

        if(!dbUser._id) {
            return res.json({
                message: "User or password mis matched",
            });
        }
        const token = createToken(dbUser._id);
        res.status(200).json({username: parsedBody.username, token:token })

    } catch (e) {
        res.json({eror: e})
    }
});


router.post("/changePassword", (req, res)=>{

});

export default router;