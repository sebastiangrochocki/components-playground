import React from 'react';
import './Heading.scss'; // Assuming you have a corresponding stylesheet

const Heading = ({ level = 1, weight = 'regular', children }) => {
  const HeadingTag = `h${level}`;
  const weightClass = `heading-${weight}`;

  return (
    <HeadingTag className={weightClass}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
