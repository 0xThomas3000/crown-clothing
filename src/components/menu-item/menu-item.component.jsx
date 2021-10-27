import React from "react";
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => ( // Destructure "title" out of props
  <div style={{
    backgroundImage: `url(${imageUrl})` // dynamically make styles on specific components
  }}
    className={`${size} menu-item`}>
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;