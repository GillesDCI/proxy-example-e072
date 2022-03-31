import { useState } from "react";
import axios from 'axios';

export default function NewPostForm(){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sending information to the server");
        //variable with data 
        const data = {
            title:title,
            content:content
        };

        //post data to the server
        const res = await axios.post('/posts/newpost', data);

        if(res.status === 200){
            console.log("yaay it worked out");
        }

    }
    
    return (
       <form onSubmit={e => {handleSubmit(e)}}>
       <label>Title:</label>
       <br />
       <input 
         name='title' 
         type='text'
         value={title}
         onChange={e => setTitle(e.target.value)}
       />
       <br/>
       <label>Content:</label>
       <br />
       <input 
         name='content' 
         type='text' 
         value={content}
         onChange={e => setContent(e.target.value)}
       />
       <br />
       <input 
         type='submit' 
         value='Add Post' 
       />
     </form>
    )
  }