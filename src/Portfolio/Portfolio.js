import React from 'react';
import './Portfolio.css';


export class Portfolio extends React.Component {

    render() {
        return(
            <div className="portfolio" id="portfolio" >
                <h1>Portfolio</h1>
                <div className="projects">
                    <div className="project" id="weatherApp">
                        <img src={require('../imgs/weatherImg.png')} alt="weatherapp"></img>
                        <div className="preview">
                            <a href="https://github.com" target='_blank' rel="noopener">
                                <button>Github</button>
                            </a>
                        </div>
                        <div className="blurb">
                            <p>
                                Weatherly: A Weather App.
                            </p>
                        </div>
                        <div className="builtWith">
                            <p>Built with:</p>
                            <ul>
                                <li>Javascript</li>
                                <li>jQuery</li>
                                <li>PositionStack API</li>
                                <li>Darksky API</li>
                            </ul>
                        </div>
                        <div className="overviewContainer">
                            <p className="overview">
                                Using PositionStack for Geocoding and Darksky for 
                                weather forecasting. This location searchable Weather App 
                                was a first project.
                            </p>
                        </div>
                    </div>

                    <div className="project" id="marsWeather">
                        <img src={require('../imgs/marsWeather.png')} alt="marsweatherapp"></img>
                        <div className="preview">
                            <a href="https://github.com/GalacticaStar/MarsWeather" target='_blank' rel="noopener">
                                <button>Github</button>
                            </a>
                            <a href="https://galacticastar.github.io/MarsWeather/" target='_blank' rel="noopener">
                                <button>Live</button>
                            </a>
                        </div>
                        <div className="blurb">
                            <p>
                                Elysium Planitia: Martian Weather
                            </p>
                        </div>
                        <div className="builtWith">
                            <p>Built with:</p>
                            <ul>
                                <li>React</li>
                                <li>Javascript</li>
                                <li>NASA Insight API</li>
                                <li>...and love</li>
                            </ul>
                        </div>
                        <div className="overviewContainer">
                            <p className="overview">
                                A React App that connects to NASA's Insight API. 
                                Displays the latest weather on Mars in degrees 
                                fahrenheit or celsius. Your choice!
                            </p>
                        </div>
                    </div>

                    <div className="project" id="portfolioEx">
                        <img src={require('../imgs/folioImg.png')} alt="portfolioImage"></img>
                        <div className="preview">
                            <a href="https://github.com" target='_blank' rel="noopener">
                                <button>Github</button>
                            </a>
                        </div>
                        <div className="blurb">
                            <p>My Portfolio Site</p>
                        </div>
                        <div className="builtWith">
                            <p>Built with:</p>
                            <ul>
                                <li>React</li>
                                <li>Javascript</li>
                                <li>Node.js + Express.js</li>
                                <li>SQL + SQLite3</li>
                            </ul>
                        </div>
                        <div className="overviewContainer">
                            <p className="overview">
                            Utilising the above technologies to create a Portfolio Web App.
                            Connected to an SQL Database and using RESTful API practices.<br></br> 
                            Is it over engineered? Yes.<br></br> Does it highlight my abilities? You bet!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}