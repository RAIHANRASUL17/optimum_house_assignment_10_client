import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from "../../../../public/images/meal1.jpg"
import img2 from "../../../../public/images/bg-2.jpg"
import img3 from "../../../../public/images/meal8.jpg"


const Footer = () => {
    return (
        <div className='mt-3'>        
           <Container className='bg bg-dark rounded'>
            <p className='text-center text-white fst-italic'><small>Figure@out Your Choice and Order have@Enjoy</small></p>
            <p className='text-center text-white fst-italic'><small>smraihanrasul@gamil.com</small></p>
            <p className='text-center text-white fst-italic'><small>phone +8613270512570</small></p>
      <Row>
        <Col>
        <div>
        <img src={img1} alt="" className='w-25 h-25' />
        </div>
        </Col>
        <Col>
        <img src={img2} alt="" className='w-25 h-75 my-auto'  />
        </Col>
        <Col>
        <img src={img1} alt="" className='w-25 h-auto' />
        </Col>
        <Col>
        <img src={img2} alt="" className='w-25 h-75' />
        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default Footer;