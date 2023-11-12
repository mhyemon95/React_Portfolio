import React from 'react';
import './blog.css';

const other = () => {
  const events = [
    { year:'Jan 2023 - jun 2023',position:'Treasurer', description: 'CSE Cultural Club,UAP' },
    { year: 'Jul 2023 - dec 2023',position:'General Secretary', description: 'CSE Cultural Club,UAP' },
    { year: 'Jan 2024 - jun 2024',position:'Vice President', description: 'CSE Cultural Club,UAP' },
    {year:'Jan 2020',position:'Volunteer',description:'BD Clean'},
  ];

  return (
    <section className="blog container section" id="blog">
    <h1 className="section_title">Other Activities</h1>
    <div className="timeline">
      <h2>Club And Social Activities</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <div className="event">
              <div className="event-year">{event.year}</div>
              <div className="event-position">{event.position}</div>
              <div className="event-description">{event.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </section>
  );
};

export default other;
