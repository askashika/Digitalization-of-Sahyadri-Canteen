import React from "react";
import { Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap';
import './Reviews.css';
import Person1 from '../utils/img/person1.jpeg';
import Person2 from '../utils/img/person2.jpeg';
import Person3 from '../utils/img/person3.jpeg';
import Person4 from '../utils/img/person4.jpeg';

const StarRating = ({ rating }) => {
    const stars = Array(5).fill(false).map((_, index) => index < rating);
    return (
        <div className="star-rating">
            {stars.map((star, index) => (
                <span key={index} className={`star ${star ? 'filled' : ''}`}>&#9733;</span>
            ))}
        </div>
    );
};

export function Reviews() {
    return (
        <div className="reviews-section container">
            <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
            <div className="row g-4">
                <div className="col-lg-6">
                    <Card className="h-100 shadow review-card">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste culpa perspiciatis. Magnam, explicabo cumque.
                                </CardText>
                                <StarRating rating={4} />
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person1} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Srishti Rai M</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow review-card">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, mollitia?
                                </CardText>
                                <StarRating rating={3} />
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person2} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Harshitha D</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow review-card">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor itaque reprehenderit minus tempore. Iste quibusdam facilis excepturi nihil maiores!
                                </CardText>
                                <StarRating rating={5} />
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person3} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Samreena</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow review-card">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum et voluptate minus error suscipit officiis placeat repudiandae quibusdam officia tempora, reprehenderit, enim, quidem exercitationem laborum!
                                </CardText>
                                <StarRating rating={2} />
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person4} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Preeti Chandrahas Bisanalli</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}
