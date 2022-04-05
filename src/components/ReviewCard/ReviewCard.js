import React from 'react';
import './ReviewCard.css'

import Rating from '../Rating/Rating';
import { Link } from 'react-router-dom';
const ReviewCard = ({ single_review }) => {
    const { id, name, rating, review, user_image } = single_review;
    return (
        <div className='col-lg-4 col-md-6'>
            <div className='review-card shadow p-3 h-100'>
                <div className='d-flex align-items-center'>
                    <div>
                        <img className='review-card-image' src={user_image} alt="" />
                    </div>
                    <div className='ms-2'>
                        <h6 className='m-0'>{name}</h6>
                        <div>
                            <Rating rating={rating}></Rating>
                            <p className='m-0'>Rating : {rating}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>{review.length > 200 ? review.slice(0, 150) + "..." : review}
                        <Link className='text-decoration-none' to={`/reviews/${id}`}>read more.</Link>
                    </p>


                </div>
            </div>

        </div>
    );
};

export default ReviewCard;