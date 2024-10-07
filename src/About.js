import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div style={styles.container}>
            <h1>About Us</h1>
            <p>
                We specialize in providing unforgettable experiences in Ethiopia,
                from breathtaking landscapes to rich cultural heritage.
            </p>
            <p>
                Arrange for local transportation (shuttle services, taxis, public transport)
                to facilitate easy movement within the destination.
            </p>
            <p>
                Provide detailed information about destinations, including cultural, historical,
                and practical insights.
            </p>
            <Link to="/">
                <button style={styles.button}>Back to Home</button>
            </Link>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
        boxSizing: 'border-box',
        backgroundColor: '#DAD07B',


    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        marginTop: '20px',
        backgroundColor:'#83CF22',
    }
};

// Media query styles for responsiveness
const mediaStyles = `
@media (max-width: 1200px) {
    .container {
        max-width: 1000px;  // Adjust for smaller desktops
    }
}

@media (max-width: 768px) {
    .container {
        padding: 15px;      // Smaller padding for tablets
    }
    h1 {
        font-size: 24px;    // Adjust heading size on smaller screens
    }
    p {
        font-size: 16px;    // Adjust paragraph font size
    }
}

@media (max-width: 480px) {
    .container {
        padding: 10px;      // Even smaller padding for mobile
    }
    h1 {
        font-size: 20px;    // Smaller heading for mobile screens
    }
    p {
        font-size: 14px;    // Smaller paragraph font for mobile screens
    }
    button {
        font-size: 14px;    // Adjust button size for mobile screens
    }
}
`;

// Inject media styles into the document
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = mediaStyles;
document.head.appendChild(styleSheet);

export default About;
