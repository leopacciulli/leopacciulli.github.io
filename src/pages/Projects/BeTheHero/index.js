import React from "react";
import Header from "../../../components/Header";
import { FiDownload } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { GoRepoClone } from "react-icons/go";
import { GoTools } from "react-icons/go";
import { GoRocket } from "react-icons/go";
import { injectIntl } from "react-intl";

import heroWeb from "../../../assets/hero-web.gif";
import heroMob from "../../../assets/hero-mob.gif";
import me from "../../../assets/me.jpeg";
import note from "../../../assets/note.png";
import fone from "../../../assets/fone.png";

import "./styles.css";

function BeTheHero({ intl }) {
    const history = useHistory();

    let cv =
        intl.locale === "en-US"
            ? "https://1drv.ms/b/s!AnLrgYinS7ViiSCGyfY5XFkr1IiK"
            : "https://1drv.ms/w/s!AnLrgYinS7Vih3XACCdiYOneDjOW?e=KZiB15";

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
                            <a className="download" href={cv} target="blank">
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
                    <div className="title-project">Be The Hero</div>

                    <div className="flex-subtitle">
                        <div className="icons">
                            <img src={note} alt="note" />
                        </div>
                        <div className="icons">
                            <img src={fone} alt="fone" />
                        </div>
                        <div className="title-info">{intl.formatMessage({ id: "hero.title" })}</div>
                        <div className="icons">
                            <img src={fone} alt="fone" />
                        </div>
                        <div className="icons">
                            <img src={note} alt="note" />
                        </div>
                    </div>
                    <div className="description-info">
                        <strong>{intl.formatMessage({ id: "challenge.title" })}: </strong>
                        {intl.formatMessage({ id: "hero.challengeRocket" })}{" "}
                        <a href="https://rocketseat.com.br/" target="blank" className="a-link">
                            RocketSeat <GoRocket size={20} color="#7159c1" />
                        </a>{" "}
                        ,{intl.formatMessage({ id: "hero.challenge" })}
                        <br />
                        <br />
                        <strong>{intl.formatMessage({ id: "project.title" })}: </strong>
                        {intl.formatMessage({ id: "hero.startProject" })}
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
                                    <div className="comand">git clone https://github.com/leopacciulli/OmniStack11-BeTheHero.git</div>
                                </li>
                                <li>
                                    <strong>Back End - localhost:3333</strong>
                                    <div className="comand">$ cd backend</div>
                                    <div className="comand">$ npm install</div>
                                    <div className="comand">$ npm start</div>
                                </li>
                                <li>
                                    <strong>Front End - localhost:3000</strong>
                                    <div className="comand">$ cd frontend</div>
                                    <div className="comand">$ npm install</div>
                                    <div className="comand">$ npm start</div>
                                </li>
                                <li>
                                    <strong>Mobile - {intl.formatMessage({ id: "hero.download" })}</strong>
                                    <div className="comand">$ cd mobile</div>
                                    <div className="comand">$ npm install</div>
                                    <div className="comand">$ npm start</div>
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
                                    <strong>Back End:</strong> Node.JS, Express, Nodemon, Jest
                                </li>
                                <li>
                                    <strong>Front End:</strong> React.JS
                                </li>
                                <li>
                                    <strong>Mobile:</strong> React Native, Expo
                                </li>
                                <li>
                                    <strong>{intl.formatMessage({ id: "hero.conectJS" })}:</strong> Knex.JS
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="repository">
                        <strong>{intl.formatMessage({ id: "repository" })}:</strong>{" "}
                        <a className="a-repo" href="https://github.com/leopacciulli/OmniStack11-BeTheHero" target="blank">
                            https://github.com/leopacciulli/OmniStack11-BeTheHero
                        </a>
                    </div>

                    <div className="flex-div">
                        <div className="img-project">
                            <img src={heroWeb} alt="beTheHero" />
                        </div>
                        <div className="img-project">
                            <img src={heroMob} alt="beTheHero" />
                        </div>
                    </div>
                </section>

                <footer>
                    <div className="container">
                        <p className="footer-info">
                            © 2020 - Portfolio {intl.formatMessage({ id: "footer" })} <strong>Leonardo Pacciulli</strong>
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default injectIntl(BeTheHero);
