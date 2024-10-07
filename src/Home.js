import React from 'react';
import { Link } from 'react-router-dom';
import ethiopia from './ethiopia.jpg'; // Your image path

const Home = () => {
    return (
        <div className="container">
            {/* First Column */}
            <div className="column">
                <h3>Explore Ethiopia</h3>
                <img
                    src={ethiopia}
                    alt="Ethiopia Image"
                    className="image"
                />
                <h4 className="text-box">
                    Visit Ethiopia, the Land Of Origin
                </h4>
            </div>

            {/* Second Column */}
            <div className="column">
                <p className="text">
                    Ethiopia is not just a destination; it’s a journey through time,
                    from the cradle of humanity to modern-day wonders.
                </p>
                <p className="text"> Ethiopia’s long-standing civilization, ancient artifacts, and religious significance are fascinating for history buffs</p>
                <p className="text">The multitude of ethnic groups provides a rich cultural experience through festivals, traditional ceremonies, and daily life interactions</p>
            </div>

            {/* Navigation Button */}
            <div className="button-container">
                <Link to="/about">
                    <button className="button">Go to About Page</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
