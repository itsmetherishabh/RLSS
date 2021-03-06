import { Router } from 'express';
import { User } from '../models';

const rlssRouter = Router();

rlssRouter.get('/enroll', (req, res) => {
    try{
        return res.status(200).json({
            message: 'Youre getting enroll page ...'
        });
    } catch(err){
        console.log("Get User Enrollment - ", err.message, err.stack);
        return res.status(500).json({
            message: err.message
        });
    }
});

rlssRouter.get('/login', (req, res) => {
    try{
        return res.status(200).json({
            message: 'Youre getting login page ...'
        });
    } catch(err){
        console.log("Get User Login - ", err.message, err.stack);
        return res.status(500).json({
            message: err.message
        });
    }
});


rlssRouter.get('/dashboard', (req, res) => {
    try{
        return res.status(200).json({
            message: 'Youre getting dashboard page ...'
        });
    } catch(err){
        console.log("Get User Dashboard - ", err.message, err.stack);
        return res.status(500).json({
            message: err.message
        });
    }
});

rlssRouter.post('/enroll', async(req, res) => {
    try{
        let { body } = req;
        let newUser = await User.create(body);
        // console.log(newUser);
        // document.alert("You've been successfully signed up!");
        return res.status(201).json(newUser);
        // res.redirect('/dashboard');
    } catch(err){
        console.log("User Enrollment - ", err.message);
        return res.status(500).json({
            message: err.message
        });
    }
}); 

rlssRouter.post('/login', async (req, res) => {
    try {
        let { body } = req;
        let loggedUser = await User.findOne(body);
        return res.status(201).json(loggedUser);
        // res.redirect('/dashboard');
    } catch (error) {
        console.log("User Login - ", error.message);
        return res.status(500).json({
            message: error.message
        });
    }
});


export default rlssRouter;