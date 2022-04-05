import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetails.css'
const BlogDetails = () => {
    const {blogID} = useParams();
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        axios.get('../blogsData.json')
            .then(data => setBlogs(data.data))
    }, [])
    const blog = blogs.find(blog => blog.id === Number(blogID))
    const title = blog?.title;
    const des = blog?.des;
    return (
        <div className='container blog-details-section my-5 shadow p-3'>
            <h3>{title}</h3>
            <p>{des}</p>
            
        </div>
    );
};

export default BlogDetails;