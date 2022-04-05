import React from 'react';
import { Link } from 'react-router-dom';
import './HeroTextArea.css'

const HeroTextArea = () => {
    return (
        <div className='hero-text-section py-5'>
            <h1 className='fw-bold hero-text'>Your Next Laptop</h1>
            <h1 className='fw-bold hero-text hero-text-light '>Your Best Laptop</h1>
            <p>Choose your laptop before know which one is suitable for you. Here you will get what customers said about all laptops.So, Before purchase a new laptop, decide which one is better for you by reading our customers review.</p>
            <Link to='/' className='btn btn-warning'>Live Demo</Link>
        </div>
    );
};

export default HeroTextArea;