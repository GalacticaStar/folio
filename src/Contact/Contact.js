import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export class Contact extends React.Component {

    render() {
        return(
            <div id="contact" className="contactContainer">
                <h1>Contact Me</h1>
                <div className="contactIcons">
                <a href="https://github.com/GalacticaStar" target="_blank" rel="noopener">
                    <FontAwesomeIcon id="contactIcon" icon={faGithubAlt} size='3x' style={{color: 'aliceblue'}} />
                </a>
                <a href="https://www.linkedin.com/in/kenwestwood/" target="_blank" rel="noopener">
                    <FontAwesomeIcon id="contactIcon" icon={faLinkedin} size='3x' style={{color: 'aliceblue'}} />
                </a>
                 <a href="https://twitter.com/KenWestwood" target="_blank" rel="noopener">
                     <FontAwesomeIcon id="contactIcon" icon={faTwitter} size='3x' style={{color: 'aliceblue'}} />
                </a>
                </div>
            </div>
        );
    }
}