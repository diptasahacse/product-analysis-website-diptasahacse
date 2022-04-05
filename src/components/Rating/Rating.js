import React from 'react';
import { StarIcon } from '@heroicons/react/solid'
import { StarIcon as StarOutlineIcon } from '@heroicons/react/outline'
import './Rating.css'
const Rating = ({rating}) => {
    let ratingStatus=[];
    for (let i = 1; i <= 5; i++) {
        if(i<= Math.ceil(rating)){
            ratingStatus.push(<StarIcon className='rating-star'></StarIcon>)
        }
        else{
            ratingStatus.push(<StarOutlineIcon className='rating-star'></StarOutlineIcon>) 
        }
        
        
    }
    return (
        <div>
            {
                
            }
            
            
        </div>
    );
};

export default Rating;