import { Button, Carousel, ProgressBar } from "react-bootstrap";
import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { FaAsymmetrik, FaEnvira } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import img1 from "../../../../public/images/meal1.jpg";
import img2 from "../../../../public/images/meal2.jpg";
import img3 from "../../../../public/images/meal3.jpg";
import img4 from "../../../../public/images/meal4.jpg";
import img5 from "../../../../public/images/meal5.jpg";
import img6 from "../../../../public/images/meal6.jpg";
import img7 from "../../../../public/images/meal7.jpg";
import img8 from "../../../../public/images/meal8.jpg";
import img9 from "../../../../public/images/meal9.jpg";
import ChefSection from "../ChefSection/ChefSection";
import { AuthContext } from "../../../Providers/AuthProvider";
import useTitleSet from "../../../hooks/useTitleSet";

const Home = () => {
  const restaurantData = useLoaderData();
  // console.log(restaurantData)


  // useTitleSet
  useTitleSet('HomePage')
  /*_____________________________________________*/
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <ProgressBar animated now={45}></ProgressBar>;
  }
  /*_____________________________________________*/
  return (
    <>
      <div className="mt-3">
        <Container
          className="rounded p-3"
          style={{ backgroundImage: "url('/images/bg-1.jpg')" }}
        >
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

          <div className="my-3">
            <Carousel fade className="bg-secondary">
              <Carousel.Item>
                <img
                  className="d-block w-25  h-75"
                  src={img8}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-25  h-75"
                  src={img5}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-25  h-75"
                  src={img7}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-25  h-75"
                  src={img5}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Fourth slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-25  h-75"
                  src={img5}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Fifth slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-25  h-75"
                  src={img8}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>sixth slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-25  h-75"
                  src={img7}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>seventh slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-25  h-75"
                  src={img8}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Eighth slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="mt-3">
            <h2 className="text-center fst-italic fw-bold fs-2 text-white bg bg-secondary p-3 rounded">
              This is Our Chef Section
            </h2>
            {restaurantData.map((restaurant) => (
              <ChefSection
                key={restaurant.id}
                restaurant={restaurant}
              ></ChefSection>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
