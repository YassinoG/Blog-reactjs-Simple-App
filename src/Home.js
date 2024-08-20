import BlogList from './BlogList';
import React from 'react';
import useFetch from './usefetch';



const Home = () => {
    const { data : blogs, IsPending, error } = useFetch("http://localhost:8000/blogs");
    return (  
        <div className="home">
            {error && <div> {error}</div> }
            {IsPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title ="All blogs are here" />}
        </div>
    );
}

export default Home;