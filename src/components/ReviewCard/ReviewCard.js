import React from 'react';
import './ReviewCard.css'
const ReviewCard = ({ single_review }) => {
    const { name, rating, review, user_image } = single_review;
    return (
        <div className='col-md-4'>
            <div>
                <div className='d-flex'>
                    <div>
                        <img className='review-card-image' src={user_image} alt="" />
                    </div>
                    <div>
                        <h6>{name}</h6>
                        <div>
                            <p>Rating : {rating}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>{review}</p>
                </div>
            </div>

        </div>
    );
};

export default ReviewCard;