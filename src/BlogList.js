import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const BlogList = ({blogs , title }) => {
    //const blogs = props.blogs; // Use 'blogs' instead of 'blog'
    //const title = props.title;
    
    //or we can remove props and specifie the properties first instead of props : {blogs,title}
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to = {`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                    </Link>
                    
{ /*<button onClick={() => handleDelete(blog.id)}>delete blog</button>*/}                </div>
            ))}
        </div>
    );
}

export default BlogList;
