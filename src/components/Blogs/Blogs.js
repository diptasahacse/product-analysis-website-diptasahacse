import React, { useEffect, useState } from 'react';
import BlogCard from '../BlogCard/BlogCard';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogsData.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='container'>
            <h3>Blogs</h3>
            <div className='m-0 row my-4 g-3'>
                {
                    blogs.map(blog => <BlogCard blog={blog} key={blog.id}></BlogCard>)
                }

            </div>
        </div>
    );
};

export default Blogs;