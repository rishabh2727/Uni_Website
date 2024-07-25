import React from 'react';
import LibraryCard from './LibraryCard';
import './Libraries.css';

// Sample data for libraries
const libraries = [
  {
    image: './Images/university_library.jpeg',
    name: 'Main Library',
    location: '123 Campus Way',
    hours: '8am - 10pm',
    description: 'The main library with extensive collections and study spaces.',
  },
  {
    image: '../Images/university_library.jpeg',
    name: 'Science Library',
    location: '456 Science Rd',
    hours: '9am - 9pm',
    description: 'Specialized in science resources and study materials.',
  },
  // Add more libraries as needed
];

function Libraries() {
  return (
    <div className='libraries'>
      <h1>Libraries</h1>
      <div className='libraries__container'>
        {libraries.map((library, index) => (
          <LibraryCard
            key={index}
            image={library.image}
            name={library.name}
            location={library.location}
            hours={library.hours}
            description={library.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Libraries;
