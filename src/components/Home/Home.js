import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HeroTextArea from '../HeroTextArea/HeroTextArea';
import HerImage from '../../images/mbp.png'
import './Home.css'

const Home = () => {
    return (
        <Container>
            <div className="row g-4">
                <div className="col-md-6">
                    <HeroTextArea></HeroTextArea>
                </div>
                <div className="col-md-6">
                    <div className='py-5 text-center'>
                        <img className='hero-image' src={HerImage} alt="" />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Home;