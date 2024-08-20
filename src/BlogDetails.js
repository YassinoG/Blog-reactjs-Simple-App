import React from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./usefetch";

const BlogDetails = () => {
    const {id} = useParams()//allows us to bring parameter from the router on the webpage
    const {data : blog , error , IsPending } = useFetch('http://localhost:8000/blogs/'+ id)
    const history = useHistory()
    
    const handleClick =()=>
    {
        fetch("http://localhost:8000/blogs/"+blog.id,{
            method: 'DELETE'
        }).then(()=>{
            history.push("/");
        })

    }
    return ( 
        <div className="blog-datails">
            {IsPending && <div>Loading ... </div>}
            {error && <div>{error} </div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p style={{color : "blue" , fontWeight : "bold",textDecoration:"none"}}>{blog.author}</p>
                    <div>{blog.body}</div>
                    <button style={{
                        background: "#f1356d",
                        color: "#fff",
                        border: "0",
                        padding: "8px",
                        borderRadius: "8px",
                        cursor: "pointer",
                    }} onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;