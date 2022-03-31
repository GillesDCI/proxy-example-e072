import express from 'express';
import data from '../posts-data.js';

const router = express.Router();

router.get('/', (req, res) => {
    return res.status(200).json(data);
})

router.post('/newpost',(req, res) => {
    //takes the max id from the data 
    let maxId = Math.max.apply(Math, data.map(function(o) { return o.id; }));
    //create new post object
    const newPost = {
        id:maxId + 1, //maxId + 1 
        title:req.body.title,
        content:req.body.content
    };
    //add the newPost object to the array
    data.push(newPost);
    //tell us that  new post was created. 
    return res.status(200).json({message:"Post was created"});
})
//delete method (to show preflight request, enable when you want to see it.)
router.delete('/test', (req, res) => {
    return res.status(200).json("Delete done")
})

export default router;