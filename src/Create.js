import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title , setTitle] = useState("Title");
    const [body , setBody] = useState("blogs content");
    const [author , setAuthor] = useState("mario");
    const [isPending , setIspending] = useState(false)
    const history = useHistory()

const handleSubmit = (e)=>
{
    e.preventDefault();
    const blog = {title, body ,author}

    setIspending(true)


    fetch('http://localhost:8000/blogs' ,{
        method : 'POST',
        headers : {"Content-Type":"application/json"},
        body : JSON.stringify(blog)
    }).then(()=> {
        console.log("blog added")
        //history.go(-1)
        history.push('/')
        setTimeout(() => {
            setIspending(false)
        }, 1000);
        
    });

}

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog tilte</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e)=> setTitle(e.target.value)}//this will allow us the change the input when we write in
                style={{color : "gray"}}
                />
                <label>Blog body</label>
                <textarea 
                required
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                >
                </textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="Gouti">Gouti</option>
                </select>
                { !isPending  &&<button>Submit Blog</button>}
                { isPending  &&<button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}

export default Create;