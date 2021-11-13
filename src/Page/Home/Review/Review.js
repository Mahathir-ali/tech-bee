import React, { useEffect, useState } from "react";
import "./Review.css";
import { Card, Carousel, Container } from "react-bootstrap";
import userImg from "../../../Images/user.jpg";
import Rating from "react-rating";
import { Typography } from "@mui/material";
const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://shielded-anchorage-63737.herokuapp.com/getReviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container className="mt-5 mb-5">
      <Typography sx={{ mb: 5 }} variant="h5">
        Customers Review
      </Typography>
      <Carousel>
        {reviews.map((review) => (
          <Carousel.Item interval={1000} key={review._id}>
            {review.img ? (
              <Card.Img variant="top" className="review" src={review.img} />
            ) : (
              <Card.Img variant="top" className="review" src={userImg} />
            )}
            <Card className="slider" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Text>{review.description}</Card.Text>
                <Card.Text style={{ fontSize: "12px", fontWeight: "700" }}>
                  {review.name}
                </Card.Text>
                <Card.Title>
                  <Rating
                    initialRating={review.rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                  ></Rating>
                </Card.Title>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Review;
