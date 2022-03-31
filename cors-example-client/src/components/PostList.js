import {useState} from 'react';
import axios from 'axios';

export default function PostList(){
    //state declared
    const [items, setItems] = useState([]);

    const refreshList = async () => {
        console.log("refreshing the list")
        const res = await axios.get('/posts')
        console.log("The response is ", res);
        setItems(res.data);

        // const res2 = await axios.delete('http://localhost:4000/posts/test');
        // console.log("res 2", res2)
    }

    //return our items 
    return (
        <div>
            <ul>
               {items.map(item => (
                   <li key={item.id}>{item.title} : {item.content}</li>
               ))}
            </ul>

            <button onClick={refreshList}>Refresh</button>
        </div>
    )
}