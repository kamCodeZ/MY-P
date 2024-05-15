// BirthdaySlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BirthdayCard from './BirthdayCard';
import userData from './users.json';
import NoBirthdayCard from './NoBirthdayCard';
import './styles.css';

const BirthdaySlider = () => {
  // Get current date
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
  const currentDay = currentDate.getDate();

  // Filter users whose birthday matches current date
  const todayBirthdays = userData.filter(user => {
    const userBirthday = new Date(user.birthday);
    const userMonth = userBirthday.getMonth() + 1;
    const userDay = userBirthday.getDate();
    return userMonth === currentMonth && userDay === currentDay;
  });

  // Shuffle the array to randomize the order
  const shuffledBirthdays = todayBirthdays.sort(() => 0.5 - Math.random());

  // Get distinct users to display in the slider
  let content = null;

  if (shuffledBirthdays.length === 0) {
    // If there are no celebrants, display the NoBirthdayCard
    content = <NoBirthdayCard />;
  } else {
    // If there are celebrants, display the BirthdayCards
    const distinctUsers = shuffledBirthdays.slice(0, 3);
    content = distinctUsers.map(user => (
      <BirthdayCard
        key={user.id}
        name={user.name}
        birthday={user.birthday}
        picture={user.picture}
      />
    ));
  }

  const settings = {
    dots: true,
    infinite: content.length > 1, // Enable infinite scrolling if there's more than one slide
    speed: 500,
    slidesToShow: content.length >= 3 ? 3 : content.length, // Show 3 slides if there are 3 or more, else show the number of slides
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Slider {...settings}>
      {content}
    </Slider>
  );
};

// Custom arrow components
const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span className="custom-prev-arrow">&#8592;</span> {/* Left arrow */}
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span className="custom-next-arrow">&#8594;</span> {/* Right arrow */}
    </div>
  );
};

export default BirthdaySlider;
