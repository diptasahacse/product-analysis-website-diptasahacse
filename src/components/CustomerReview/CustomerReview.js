import React from 'react';
import { Link } from 'react-router-dom';
import { useReview } from '../../hooks/useReview';
import ReviewCard from '../ReviewCard/ReviewCard';

const CustomerReview = () => {
    const [reviews, setReviews] = useReview();

    return (
        <div className='py-4'>
            <h2 className='fw-bold text-center'>Customer Reviews (3)</h2>
            <div className='row m-0 my-5'>
                {
                    reviews.slice(0, 3).map(review => <ReviewCard key={review.id} single_review={review}></ReviewCard>)
                }
            </div>
            <div className='text-center'>
                <Link to='./reviews' className='btn btn-warning btn-sm'>Show All</Link>
            </div>

        </div>
    );
};

export default CustomerReview;