import express from 'express';
import cors from 'cors';

import postsRoutes from './routes/postsRoutes.js'; 

const app = express();

//registering middleware/configuration 
app.use(express.json());

// const corsOptions = {
//     origin:'http://localhost:3000',
//     methods:['HEAD','POST', 'GET', 'DELETE'],//which methods do I allow on the server from origin.
//     credentials:true
// }

// app.use(cors(corsOptions));
//app.use(cors())
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// })

app.use('/posts', postsRoutes);

//all other requests that don't fit our routes.
app.all('*', (req, res) => {
    return res.status(500).json('Invalid path');
})

app.listen(4000, () => {
    console.log("The server is listening for requests on port 4000");
})