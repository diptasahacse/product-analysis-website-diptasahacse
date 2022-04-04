import React from 'react';
import './ReviewCard.css'
const ReviewCard = ({ single_review }) => {
    const { name, rating, review, user_image } = single_review;
    return (
        <div className='col-lg-4 col-md-6'>
            <div className='review-card shadow p-3'>
                <div className='d-flex align-items-center'>
                    <div>
                        <img className='review-card-image' src={user_image} alt="" />
                    </div>
                    <div className='ms-2'>
                        <h6 className='m-0'>{name}</h6>
                        <div>
                            <p className='m-0'>Rating : {rating}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>{review.length > 200 ? review.slice(0,200)+"..." : review}</p>
                </div>
            </div>

        </div>
    );
};

export default ReviewCard;