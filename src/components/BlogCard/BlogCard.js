import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css'

const BlogCard = ({blog}) => {
    const {title,des,id} = blog;
    return (
        <div className='col-md-4'>
            <div className='shadow p-3 blog-post'>
                <h3 className='text-warning'>{title}</h3>
                <p title={des}>{des.slice(0,100)+"..."}
                <Link to={`/blogs/${id}`} className='text-decoration-none'>read more.</Link>
                </p>

            </div>
            
        </div>
    );
};

export default BlogCard;