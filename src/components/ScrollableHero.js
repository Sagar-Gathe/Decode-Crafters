import React from "react";
import "../scroll.css";

const headlines = [
  {
    title: "Master Modern Technologies",
    description: "Dive into the forefront of technological advancements with our courses. From emerging programming languages to innovative tech stacks, our curriculum is designed to keep you ahead of the curve and ready for the future of tech."
  },
  {
    title: "Elevate Your Skills with Expert Knowledge",
    description: "Transform your career by gaining in-depth knowledge and hands-on experience from industry leaders. Our courses are crafted to provide practical insights and strategies that top professionals use to stay at the top of their game."
  },
  {
    title: "Build, Innovate, and Lead in Your Field",
    description: "Unlock your potential to create innovative solutions and drive meaningful change. Our programs focus on equipping you with the skills to build groundbreaking projects and lead teams with confidence and vision."
  },
  {
    title: "Start Your Journey Towards Expertise Today",
    description: "Embark on a transformative learning experience designed to elevate your professional journey. Whether you’re starting from scratch or looking to deepen your expertise, our courses provide the tools and support you need to succeed."
  }
];

const ScrollableHero = () => {
  return (
    <div className="scrollable-hero">
      {headlines.map((headline, index) => (
        <section key={index} className="hero">
          <div className="hero-inner" id={`section-${index}`}>
            <figure></figure>
            <div className="text-content">
              <h2 className="hero__title">{headline.title}</h2>
              <p className="hero__description">{headline.description}</p>
            </div>
          </div>
        </section>
      ))}
      <section className="content">
        <article className="content__inner">
          <h1 className="content__title">
            Pioneering Tomorrow: The Power of Innovation
          </h1>
          <h3 className="content__author">By Industry Leaders</h3>
          <p className="content__description">
            Dive into the cutting-edge trends that are shaping the future of
            technology. Discover how visionaries are driving change and
            revolutionizing industries with breakthrough innovations.
          </p>
        </article>
      </section>
    </div>
  );
};

export default ScrollableHero;
