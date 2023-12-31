import React from "react";
import { Element } from "react-scroll"; // Import Element from react-scroll
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Stacks from "./Stacks";

const Content = () => {
  return (
    <div>
      {/* The container class sets a max-width and centers the content */}
      <Element name="top" className="mb-8">
        {/* Content for top section */}
        <h1 className="text-3xl font-bold">Top Section</h1>
        {/* Add content for the top section */}
      </Element>
      <Element name="home" className="mb-8">
        <Home />
      </Element>
      <Element name="projects" className="mb-8">
        <Projects />
      </Element>
      <Element name="stacks" className="mb-8">
        <Stacks />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default Content;
