import React from "react";
import Header from "../../../components/Header";
import { FiDownload } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { GoRepoClone } from "react-icons/go";
import { GoTools } from "react-icons/go";
import { injectIntl } from "react-intl";

import hairWeb from "../../../assets/hair-web.gif";
import me from "../../../assets/me.jpeg";
import note from "../../../assets/note.png";

import "./styles.css";

function HairShop({ intl }) {
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
                    <div className="title-project">Hair Shop</div>

                    <div className="flex-subtitle">
                        <div className="icons">
                            <img src={note} alt="note" />
                        </div>
                        <div className="title-info">{intl.formatMessage({ id: "hair.title" })}</div>
                        <div className="icons">
                            <img src={note} alt="note" />
                        </div>
                    </div>
                    <div className="description-info">
                        <strong>{intl.formatMessage({ id: "challenge.title" })}: </strong>
                        {intl.formatMessage({ id: "hair.challenge" })}
                        <br />
                        <br />
                        <strong>{intl.formatMessage({ id: "project.title" })}: </strong>
                        {intl.formatMessage({ id: "hair.project" })}
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
                                    <div className="comand">git clone https://github.com/leopacciulli/Hair-Shop.git</div>
                                </li>
                                <li>
                                    <strong>Front End - localhost:3000</strong>
                                    <div className="comand">$ npm install</div>
                                    <div className="comand">$ npm start</div>
                                </li>
                                <li>
                                    <strong>Back End</strong>
                                    <div className="comand">{intl.formatMessage({ id: "hair.backend" })}</div>
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
                                    <strong>Front End:</strong> React.JS
                                </li>
                                <li>
                                    <strong>Back End:</strong> {intl.formatMessage({ id: "hair.backend" })}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="repository">
                        <strong>{intl.formatMessage({ id: "repository" })}:</strong>{" "}
                        <a className="a-repo" href="https://github.com/leopacciulli/Hair-Shop" target="blank">
                            https://github.com/leopacciulli/Hair-Shop
                        </a>
                    </div>

                    <div className="flex-div">
                        <div className="img-project center">
                            <img src={hairWeb} alt="hairShop" />
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

export default injectIntl(HairShop);
