import React, { useEffect, useState } from 'react';
import { useReview } from '../../hooks/useReview';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    
    
    return (
        <div className='container'>
            <h2>Review</h2>
            <div className='row m-0'>
                {
                    reviews.map(review => <ReviewCard key={review.id} single_review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;