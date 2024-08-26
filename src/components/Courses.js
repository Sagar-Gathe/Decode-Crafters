import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import cardData from "./mockData";

const Courses = () => {
  return (
    <div className="main-course">
      {cardData.map((data, index) => (
        <Card style={{ width: "18rem", margin: "10px" }} key={index}>
          <Card.Img variant="top" src={data.image} alt={data.title} />
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>{data.text}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            {data.listItems.map((item, index) => (
              <ListGroup.Item key={index}>{item}</ListGroup.Item>
            ))}
          </ListGroup>
          <Card.Body>
            {data.links.map((link, index) => (
              <Card.Link href="#" key={index}>
                {link}
              </Card.Link>
            ))}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Courses;
