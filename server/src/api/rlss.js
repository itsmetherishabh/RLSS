import { Router } from 'express';

import { User } from '../models';

const rlssRouter = Router();

rlssRouter.get('/enroll', (req,res) => {
    try{
        return res.status(200).json({
            message: 'Youre getting enroll page ...'
        });
    }catch(err){
        console.log("Get User Enrollment - ", err.message);
        return res.status(500).json({
            message: err.message
        });
    }
});

rlssRouter.post('api/enroll', async(req,res) => {
    try{
        let { body } = req;

        let newUser = await User.create(body);
        console.log(newUser);
        return res.status(201).json(newUser);
    } catch(err){
        console.log("User Enrollment - ", err.message);
        return res.status(500).json({
            message: err.message
        });
    }
}); 

export default rlssRouter;