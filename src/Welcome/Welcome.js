import React from 'react';
import './Welcome.css';
import { Results } from '../Results/Results';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Welcome extends React.Component {

    typeAnimation() {
        const typedText = document.querySelector('.typing');
        const textArray = ['Senior First Officer', 'Team Player', 'Space Nerd!'];
        const typeDelay = 200;
        const eraseDelay = 100;
        const newTextDelay = 2000
        let currentText = 0;
        let currentChar = 0;

        const type = () => {
            if(currentChar < textArray[currentText].length) {
                typedText.textContent += textArray[currentText].charAt(currentChar);
                currentChar ++;
                setTimeout(type, typeDelay);
            } else {
                setTimeout(erase, newTextDelay);
            }
        };

        const erase = () => {
            if (currentChar > 0) {
                typedText.textContent = textArray[currentText].substring(0, currentChar - 1);
                currentChar --;
                setTimeout(erase, eraseDelay);
            } else {
                currentText ++;
                if (currentText >= textArray.length) {
                    currentText = 0;
                    type();
                } else {
                    setTimeout(type, 500);
                }
            }
        };

        type();
    }

    componentDidMount() {
        window.addEventListener('load', (event) => {
            this.typeAnimation();
          });
    }

    render() {
        return (
            <div className="welcome" id="welcome">
                <h1 id="hello">Hello!</h1>
                <h2 id="name">My name is Ken</h2>
                <div className="intro">
                    <h3>Full-Stack Web Developer</h3>
                    <p id="andTag">+</p>
                    <p className="typingText"><span className="typing"></span></p>
                </div>

                <Results /> {/* change visibility for initial deployment */}

                <a href="#portfolio"><FontAwesomeIcon className="chevronDown" icon={faChevronDown} /></a>

            </div>
        );
    }
}