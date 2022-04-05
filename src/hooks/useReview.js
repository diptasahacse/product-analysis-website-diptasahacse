import axios from "axios";
import { useEffect, useState } from "react";

export const useReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        axios.get('review.json')
        .then(data => setReviews(data.data))

    },[])

    return [reviews, setReviews];
}