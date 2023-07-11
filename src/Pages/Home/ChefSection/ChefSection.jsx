import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import bg2 from '../../../../public/images/bg-2.jpg'
import { FaEye, FaRegHandPointRight, FaRegStar, FaRegThumbsUp, FaStar, FaThumbsUp } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// react rating
import Rating from "react-rating";


const ChefSection = ({ restaurant }) => {
  // console.log(restaurant);
  const {chefImg, name, experience, numOfRecipe, numLikes, id}= restaurant;
  return (
    <div >
     
      <Container>
      <Row>
        <Col  lg={2}></Col>

        <Col lg={8} className="my-3">
            <Card>
              <div className="d-flex justify-content-center p-3">
              <Card.Img variant="top" src={chefImg} style={{width: "250px", height: "200px",}} />
              </div>
              <Card.Body>
                <Card.Title className="text-center fs-2">{name}</Card.Title>
               
                  <div className="text-center fs-4">
                  <p>Experience : {experience}</p>
                  <p>Recipes : {numOfRecipe}</p>
                 <div>
                 <Rating className="text-warning mb-2 me-2 mt-0"
                 placeholderRating={numLikes.number}
                 emptySymbol={<FaRegThumbsUp></FaRegThumbsUp>}
                 placeholderSymbol={<FaRegThumbsUp></FaRegThumbsUp>}
                 fullSymbol={<FaThumbsUp></FaThumbsUp>}
                 >
                 </Rating>
                 <span>{numLikes}</span>
                 </div>
                  </div>
                
                <div className="d-flex justify-content-center">
                
                <Link to={`/restaurant/${id}`}><Button  className="btn btn-secondary text-white p-3"><FaEye></FaEye>-View Recipes</Button></Link>
                </div>
              </Card.Body>
            </Card>
            </Col>
        
        <Col lg={2}></Col>
      </Row>
      </Container>
    </div>
  );
};

export default ChefSection;
