import React, { Component } from 'react';
/* import { Link } from 'react-router-dom'; */

import covid19 from '../images/covid19.png';
import IMG_1217 from '../images/IMG_1217.JPG';


export default class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="about-project">
                    <div className="card-body">
                        <div className="inner">
                            <img className="covid-image" src={covid19} alt="covid-19 virus close-up" />
                        </div>
                        <h3 className="card-title mt-2">COVIDsimple</h3>
                        <h5 className="card-subtitle">A more intuitive data representation</h5>
                        <p className="card-text mt-3">This project started with the idea of creating a site that would be able to represent
                        COVID-19 data in an accessible and visual way. This was meant to give the user an intuitive feeling of the complexity
                        of the pandemic and the seriousness of the problem. </p>
                    </div>
                </div>
                <div className='card-deck'>
                    <div className="card cardSet1">
                        <div className="card-body">
                            <div className="inner">
                                <img src="https://avatars1.githubusercontent.com/u/21066381?s=400&u=f459405e8ac019e30cfa764d72c4cc432eacd0ce&v=4"
                                    alt="developer">
                                </img>
                            </div>
                            <h3 className="card-title mt-2">Connor Robetorye</h3>
                            <h5 className="card-subtitle">Graduate Student</h5>
                            <p className="card-text mt-3">
                                I'm currently midway through my AI and ML focused degree,
                                though as a former philosophy major I like my CS as theoretical and impractical as it can be, 
                                meaning Theory of Computation, Discrete Math, and Algorithms have been my favorite
                                classes. When I'm not busy with school, I like making computer-generated art, biking from food cart
                                to food cart, and playing chess online.
                            </p>
                            <a href="https://github.com/inordirection"
                                className="btn btn-dark btn-sm float-right"
                                title="Go to Connor gitHub page">GitHub
                            </a>
                        </div>
                    </div>
                    <div className="card cardSet2 ">
                        <div className="card-body">
                            <div className="inner">
                                <img src="https://avatars3.githubusercontent.com/u/27927826?s=460&u=cdc6fbdf407938cd1c23d940cf15a999fbc30491&v=4" alt="developer"></img>
                            </div>
                            <h3 className="card-title mt-2">Cosimo Gonnelli</h3>
                            <h5 className="card-subtitle">Graduate Student</h5>
                            <p className="card-text mt-3">I am a grad student at Portland State University interested in AI/ML and building new things.
                            I have experince in research with my previous Master and work experience in Psychology in Italy and US.
                            My hobbies are lifting heavy weights, and watching anime and documentaries of all kinds.</p>
                            <a href="https://github.com/cosimogonnelli"
                                className="btn btn-dark btn-sm float-right"
                                title="Go to Cosimo gitHub page" >GitHub
                            </a>
                        </div>
                    </div>
                    <div className="card cardSet3 ">
                        <div className="card-body">
                            <div className="inner">
                                <img src={IMG_1217} alt="developer's dog"></img>
                            </div>
                            <h3 className="card-title mt-2">Meghan Mueller-Cox</h3>
                            <h5 className="card-subtitle">Graduate Student</h5>
                            <p className="card-text mt-3">I am a grad student at PSU. While at PSU my focus areas of study have been Databases and Security.
                            Prior to arriving at PSU I was a release manager and program manager at several software companies here in Portland.
                                                          In my spare time I like to play soccer, hike, go for bike rides, and spend time with my 2 dogs. </p>
                            <a href="https://github.com/mueller-cox"
                                className="btn btn-dark btn-sm float-right"
                                title="Go to Meghan gitHub page">GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}