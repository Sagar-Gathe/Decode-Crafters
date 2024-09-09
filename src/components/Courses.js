import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import cardData from "./mockData";
import { useState } from "react";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCards = cardData.filter((data) =>
    data.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-course-container">
      <div className="course-header">
        <h2>Explore Our Courses</h2>
        <p>
          Find the perfect course to enhance your skills and advance your
          career.
        </p>
      </div>
      <div className="course-search">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="main-course">
        {filteredCards.map((data, index) => (
          <Card
            key={index}
            sx={{ maxWidth: 400, margin: "10px" }}
            className="custom-card"
          >
            <CardMedia
              component="img"
              alt={data.title}
              height="140"
              image={data.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.text}
              </Typography>
            </CardContent>
            <CardActions>
              {data.links.map((link, index) => (
                <Button size="small" key={index}>
                  {link}
                </Button>
              ))}
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;
