import React from 'react';
import classes from './Section.module.css';
const Section = ({ title, children }) => {
  return (
    <div className={classes.sectionTitle}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
