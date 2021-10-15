import express, { json } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import rlssRouter from './api/rlss';

import { DB, PORT } from './config';

const app = express();

app.use(json());
app.use(cors());

app.use('/api/rlss',rlssRouter);

app.get('/', (req,res) => {
    return res.status(200).json({
        message: 'Server is Running ...'
    });
});

const main = async () => {
    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected ...");
        app.listen(PORT, () => console.log(`Server started at port: ${PORT}`))
    } catch (err){
        console.log(err.message);
    }
}

main();