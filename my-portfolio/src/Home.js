
// Home.js
import React, { useState, useRef, useEffect} from 'react';
import { useSpring, animated } from 'react-spring';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import Section from './Section';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from 'react-slick';
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
          <p className="div-content">Div {id}</p>
        </animated.div>
      ))}
    </div>
  );
};

export default Home;