import React from "react";
import "../scroll.css"; 

const headlines = [
  "Master Modern Technologies",
  "Elevate Your Skills with Expert Knowledge",
  "Build, Innovate, and Lead in Your Field",
  "Start Your Journey Towards Expertise Today",
];
const ScrollableHero = () => {
  return (
    <div className="scrollable-hero">
      {headlines.map((headline, index) => (
        <section key={index} className="hero">
          <div className="hero-inner" id={`section-${index}`}>
            <figure></figure>
            <h2 className="hero__title">{headline}</h2>
          </div>
        </section>
      ))}
      <section className="content">
        <article className="content__inner">
          <h1 className="content__title">
            Innovating the Future: The Art of Technology
          </h1>
          <h3 className="content__author">By Tech Visionaries</h3>
        </article>
      </section>
    </div>
  );
};

export default ScrollableHero;
