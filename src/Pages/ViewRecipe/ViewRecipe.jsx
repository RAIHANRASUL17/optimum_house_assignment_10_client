import React, { useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import {
  FaArrowLeft,
  FaAsymmetrik,
  FaEnvira,
  FaRegStar,
  FaRegThumbsUp,
  FaStar,
  FaThumbsUp,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// react rating
import Rating from "react-rating";
import useTitleSet from "../../hooks/useTitleSet";

const ViewRecipe = () => {
  const dynamicData = useLoaderData();
  console.log(dynamicData);
  const {
    chefImg,
    name,
    experience,
    numOfRecipe,
    numLikes,
    id,
    recipeName,
    recipeImg,
    description,
    Ingredient,
    method,
    rating,
  } = dynamicData;
  const [btnState, setBtnState] = useState(false)
  //   toast
  const notify = () => {
    if(btnState){
      return;
    }
    toast("Added Your Food");
    setBtnState(true)
  };

  // useTitleSet
  useTitleSet('ViewRecipesPage')
  return (
    <>
      <div className="p-5">
        <Container className="rounded p-3"
          style={{ backgroundImage: "url('/images/bg-1.jpg')" }}>
        <h1 className="text-center fst-italic fw-bold fs-1 text-white">
            Welcome Our <FaAsymmetrik></FaAsymmetrik> Optimum House !!!!
          </h1>
          <h2 className="text-center my-2">
            Please Have a Set And Enjoy Our Food, Always Open For You
          </h2>
          <p className="text-center text-white">
            A recipe is a formula of ingredients and a list of instructions for
            creating prepared foods. It is used to control quality, quantity,
            and food costs in a foodservice operation. A recipe may be simple to
            complex based on the requirements of the operation and the intended
            user.
          </p>
          <div className="d-flex justify-content-center">
            <Button className="btn btn-warning btn-lg">
              Explore Recipes <FaEnvira></FaEnvira>
            </Button>
          </div>
        </Container>
      </div>

      <div className="mt-3">
        <Container>
          <h1 className="text-center fst-italic fw-bold fs-2  bg bg-light p-3 rounded">
            This is view Recipe Section
          </h1>
          <Row>
            <Col lg={2}></Col>

            <Col lg={8} className="my-3">
              <Card className="text-center">
                <Card.Header>
                  <img
                    src={chefImg}
                    style={{ width: "50px" }}
                    alt=""
                    className="rounded-circle"
                  />
                </Card.Header>
                <Card.Body>
                  <Card.Title>{recipeName}</Card.Title>
                  <div className="d-flex justify-content-center p-3">
                    <Card.Img variant="top" src={recipeImg} style={{width: "300px", height: "250px",}} />
                  </div>
                  <Card.Text>{description}</Card.Text>

                  <div>
                    <Card className="w-100">
                      <Card.Header className="bg bg-danger rounded text-white">
                        Ingredients
                      </Card.Header>
                      <ListGroup variant="flush">
                        <ListGroup.Item>{Ingredient}</ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </div>
                  <div className="my-3">
                    <Card className="w-100">
                      <Card.Header className="bg bg-danger rounded text-white">
                        Methods
                      </Card.Header>
                      <ListGroup variant="flush">
                        <ListGroup.Item>step-{method[0]}</ListGroup.Item>
                        <ListGroup.Item>step-{method[1]}</ListGroup.Item>
                        <ListGroup.Item>step-{method[2]}</ListGroup.Item>
                        {{ method } ? (
                          <ListGroup.Item>step-{method[3]}</ListGroup.Item>
                        ) : (
                          ""
                        )}
                      </ListGroup>
                    </Card>
                  </div>

                  <div>
                    <Rating
                      className="text-warning mb-2 me-2 mt-0"
                      placeholderRating={numLikes.number}
                      emptySymbol={<FaRegThumbsUp></FaRegThumbsUp>}
                      placeholderSymbol={<FaRegThumbsUp></FaRegThumbsUp>}
                      fullSymbol={<FaThumbsUp></FaThumbsUp>}
                    ></Rating>
                    <span>{numLikes}</span>
                  </div>

                  <div>
                    <span className="fs-5 me-2">{rating}</span>
                    <Rating
                      className="text-warning mb-2 fs-5"
                      readonly
                      placeholderRating={rating.number}
                      emptySymbol={<FaStar></FaStar>}
                      placeholderSymbol={<FaRegStar></FaRegStar>}
                      fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                  </div>

                  <Button
                    onClick={notify}
                    disabled = {btnState}
                    className="btn btn-secondary text-white p-3"
                  >
                    Favourite Food
                  </Button>
                  <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  ></ToastContainer>
                </Card.Body>
                <Link to="/">
                  <Card.Footer className="text-muted fs-1 fw-bold">
                    <FaArrowLeft></FaArrowLeft> Go Back
                  </Card.Footer>
                </Link>
              </Card>
            </Col>

            <Col lg={2}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ViewRecipe;
