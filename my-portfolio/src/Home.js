// Home.js
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import Projects from './Projects';
import ProjectDetails from './ProjectDetails';
import AboutMe from './AboutMe';
import Contact from './Contact';
import './Home.css'; // Make sure to include your CSS file

const Home = () => {
  const divs = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
  }));

  const [index, setIndex] = useState(0);

  const { x } = useSpring({
    x: -(index * 100), // Assuming each div has a width of 100%
    reset: true,
    from: { x: 0 },
    onRest: () => setIndex((index + 1) % divs.length),
  });

  // Reset index when component mounts
  useEffect(() => {
    setIndex(0);
  }, []);

  return (
    <div className="scrolling-container">
      {divs.map(({ id, color }) => (
        <animated.div
          key={id}
          className="scrolling-div"
          style={{
            background: color,
            transform: x.interpolate((val) => `translateX(${val}%)`),
          }}
        >
          {id === 1 && <Projects />}
          {id === 2 && <ProjectDetails />}
          {id === 3 && <AboutMe />}
          {id === 4 && <Contact />}
          <p className="div-content">Div {id}</p>
        </animated.div>
      ))}
    </div>
  );
};

export default Home;
