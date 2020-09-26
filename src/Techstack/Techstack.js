import React from 'react';
import './Techstack.css';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faReact, faNode, faGithub, faGit, faJs, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
//import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'



export class Techstack extends React.Component {
    
    render() {
        return(
            <div className="techstack" id="techstack">
                <h1>Techstack</h1>
                <div className="stackContainer">
                    <div className="front">
                        <FontAwesomeIcon title="HTML5" icon={faHtml5} size="3x" style={{color: '#cd3a03', margin: '15px'}} />
                        <FontAwesomeIcon title="CSS3" icon={faCss3Alt} size="3x" style={{color: '#1984c9', margin: '15px'}} />
                        <FontAwesomeIcon title="Javascript" icon={faJs} size="3x" style={{color: '#ffd700', margin: '15px'}} />
                        <img src="" alt="JQuery" />
                        <FontAwesomeIcon title="Reactjs" icon={faReact} size="3x" style={{color: '#1984c9', margin: '15px'}} />
                    </div>
                    <div className="back">
                        <FontAwesomeIcon icon={faNode} size="5x" style={{color: '#53b339', margin: '15px'}} />
                        <img src="" alt="ExpressJs" />
                        <img src="" alt="SQL" />
                        <img src="" alt="SQLite3" />
                    </div>
                    <div className="other">
                        <FontAwesomeIcon icon={faGit} size="3x" style={{margin: '15px'}} />
                        <FontAwesomeIcon title="Github" icon={faGithub} size="3x" style={{margin: '15px'}} />
                        <img src="" alt="Mocha" />
                    </div>
                </div>
            </div>
        );
    }
}