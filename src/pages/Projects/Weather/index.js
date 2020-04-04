import React from "react";
import Header from "../../../components/Header";
import { FiDownload } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { GoRepoClone } from "react-icons/go";
import { GoTools } from "react-icons/go";
import { injectIntl } from "react-intl";

import weatherMob from "../../../assets/weather-mob.gif";
import me from "../../../assets/me.jpeg";
import fone from "../../../assets/fone.png";

import "./styles.css";

function Weather({ intl }) {
    const history = useHistory();

    return (
        <div className="page-container">
            <div className="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <img src={me} alt={"me"} />
                    </li>
                    <li onClick={() => history.push("/")} className="noActive">
                        <a href={"#home"} className="menu-item back-media page-scroll">
                            {intl.formatMessage({ id: "sidebar.back" })}
                        </a>
                    </li>
                    <li className="menu-footer">
                        <h6>
                            <a className="download" href="/src/cv.pdf" target="_blank">
                                <FiDownload size={19} color="#FFF" />
                                <div>Download CV</div>
                            </a>
                        </h6>
                    </li>
                </ul>
            </div>

            <div className="page-content-wrapper">
                <Header />

                <section className="section-project">
                    <div className="title-project">Weather</div>

                    <div className="flex-subtitle">
                        <div className="icons">
                            <img src={fone} alt="fone" />
                        </div>
                        <div className="title-info">{intl.formatMessage({ id: "weather.title" })} (Android / iOS)</div>
                        <div className="icons">
                            <img src={fone} alt="fone" />
                        </div>
                    </div>
                    <div className="description-info">
                        <strong>{intl.formatMessage({ id: "challenge.title" })}: </strong>
                        {intl.formatMessage({ id: "weather.challenge" })}
                        <br />
                        <br />
                        <strong>{intl.formatMessage({ id: "project.title" })}: </strong>
                        {intl.formatMessage({ id: "weather.project" })}
                    </div>

                    <div className="flex-div width-div">
                        <div className="techs-info">
                            <div className="flex-tech">
                                <GoRepoClone size={25} color={"#888"} />
                                <div className="techs">{intl.formatMessage({ id: "start.project" })}:</div>
                            </div>
                            <ul className="list-techs">
                                <li>
                                    <strong>{intl.formatMessage({ id: "clone.repository" })}</strong>
                                    <div className="comand">git clone https://github.com/leopacciulli/Weather.git</div>
                                </li>
                                <li>
                                    <strong>Mobile - {intl.formatMessage({ id: "hero.download" })}</strong>
                                    <div className="comand">$ npm install</div>
                                    <div className="comand">$ npm start</div>
                                </li>
                                <li>
                                    <strong>Back End</strong>
                                    <div className="comand">API - https://www.metaweather.com</div>
                                </li>
                            </ul>
                        </div>
                        <div className="techs-info">
                            <div className="flex-tech">
                                <GoTools size={25} color={"#888"} />
                                <div className="techs">{intl.formatMessage({ id: "techs" })}:</div>
                            </div>
                            <ul className="list-techs">
                                <li>
                                    <strong>Front End:</strong> React Native, Redux, Hooks
                                </li>
                                <li>
                                    <strong>Back End:</strong> API - https://www.metaweather.com
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="repository">
                        <strong>{intl.formatMessage({ id: "repository" })}:</strong>{" "}
                        <a className="a-repo" href="https://github.com/leopacciulli/Weather" target="blank">
                            https://github.com/leopacciulli/Weather
                        </a>
                    </div>

                    <div className="flex-div">
                        <div className="img-project center">
                            <img src={weatherMob} alt="weather" />
                        </div>
                    </div>
                </section>

                <footer>
                    <div className="container">
                        <p className="footer-info">
                            © 2020 - {intl.formatMessage({ id: "footer" })} <strong>Leonardo Pacciulli</strong>
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default injectIntl(Weather);
