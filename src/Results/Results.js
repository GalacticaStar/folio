import React from 'react';

import './Results.css';
import { Search } from '../utils/Search';

export class Results extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tech: null,
            techstack: null,
            unknown: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.getTech = this.getTech.bind(this);
        this.getTechstack = this.getTechstack.bind(this);
        this.showResults = this.showResults.bind(this);
        this.okThanks = this.okThanks.bind(this);
    }

    getTech(e) {
        const target = e.target.value;
        const tech = target.toUpperCase();

        if (!tech) {
            this.setState({
                unknown: null
            })
            return;
        } else {
            Search.techData(tech)
            .then(jsonResponse => {
                if (!jsonResponse) {
                    this.setState({
                        unknown: target,
                        tech: null,
                    })
                    return;
                } else {
                    
                    console.log(`I know: ${jsonResponse.tech.tech}`);
                    
                    this.setState({
                        tech: jsonResponse.tech,
                        techstack: null,
                        unknown: null,
                    });
                }
            });
        };
    }

    getTechstack() {

        Search.allData()
        .then(jsonResponse => {
            console.log(`I know: ${jsonResponse.techstack[0].tech}`);
            
            this.setState({
                techstack: jsonResponse.techstack,
                tech: null,
                unknown: null,
            });
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    showResults() {
        if (this.state.techstack) {

            document.getElementById('hello').style.display = 'none';
            document.getElementById('name').style.display = 'none';
            document.getElementById('whatYouGot').style.display = 'none';
            document.getElementById('okThanks').style.display = 'initial';

            return (this.state.techstack.map(tech => {
                return <li id="techstackItem">{tech.tech.toLowerCase()}: {tech.description}</li>
            }));

        } else if (this.state.tech) {

            document.getElementById('okThanks').style.display = 'none';
            document.getElementById('whatYouGot').style.display = 'initial';
            document.getElementById('hello').style.display = 'initial';
            document.getElementById('name').style.display = 'initial';
            console.log(this.state.tech);

            return <p id="searchContact">{this.state.tech.description}! Maybe I can help? <a href="https://www.linkedin.com/in/kenwestwood/" 
            target="_blank" rel="noopener">Contact Me...</a></p>
        } else if (this.state.unknown) {

        return <p>What is this... {this.state.unknown}?</p>;

        } else {
            return;
        }
    }

    okThanks() {

        document.getElementById('hello').style.display = 'initial';
        document.getElementById('name').style.display = 'initial';
        document.getElementById('okThanks').style.display = 'none';
        document.getElementById('whatYouGot').style.display = 'initial';

        this.setState({
            tech: null,
            techstack: null,
            unknown: null,
        });
    }

    render() {
        return(
            <div className="getResults">
                <p className="info">
                    Try the search function below to search a database of my current develepment skills
                </p>

                <form id="search-box" onSubmit={this.handleSubmit} autoComplete="off">
                    <input className="techSearchInput" type="text" id="techSearch" placeholder="Search Framework/Library" onChange={this.getTech}/>
                    <br></br>
                </form>
                <div className="results">
                    {this.showResults()}
                </div>
                <input id="whatYouGot" type="submit" value="Just... Show Me What You Got!" onClick={this.getTechstack}/>
                <input id="okThanks" type="submit" value="Ok. Thanks!" onClick={this.okThanks} />
            </div>
        );
    }
}