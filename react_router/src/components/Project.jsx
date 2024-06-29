import React from 'react';
import Card from '../components/Card';
import image3 from "../assets/image3.jpg";


const Project = () => {
  return (
    <div>
      <h1>Projects Page</h1>
      <div className="card-container">
        <Card
          title="Project card 1"
          description="Description cardni title 1"
          image={image3}
        />
        <Card
          title="Project cardi 2"
          description="Description cardni title 2"
          image={image3}
          
        />
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default Project;
