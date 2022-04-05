import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ReviewDetails.css'

const ReviewDetails = () => {
    const {reviewId} = useParams();
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        axios.get('../review.json')
        .then(data => setReviews(data.data))
    },[])
    const review = reviews.find(rev => rev.id === Number(reviewId))
    const img = review?.user_image;
    const name = review?.name;
    const rating = review?.rating;
    const reviewDes = review?.review;
    return (
        <div className='container review-details-container my-5 text-center shadow p-4'>
            <div>
                <img className='review-details-img' src={img} alt="" />
            </div>
            <p>Rating : {rating}</p>
            <p>{reviewDes}</p>
            <h5 className='text-end'>{name}</h5>
            
        </div>
    );
};

export default ReviewDetails;