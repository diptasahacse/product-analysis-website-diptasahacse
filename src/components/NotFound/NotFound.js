import React from 'react';
import './NotFound.css'
import animatedImg from '../../images/notfound.gif'
const NotFound = () => {
    return (
        <div className='container'>
            <div className="row m-0 g-4 pt-5">
                <div className="col-lg-7">
                    <div>
                        <h2 className='not-fount-hero-text'>Oops!</h2>
                        <p  className='not-fount-des-text'>We can't seem to find the page you are looking for.</p>

                    </div>
                </div>
                <div className="col-lg-5">
                    <div>
                        <img className='not-found-img' src={animatedImg} alt="" />
                    </div>
                </div>

            </div>


        </div>
    );
};

export default NotFound;