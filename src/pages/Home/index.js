import React, { useState } from "react";
import Header from "../../components/Header";
import Education from "../../components/Education";
import Experience from "../../components/Experience";
import { FiDownload } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiMap } from "react-icons/fi";
import { FiGlobe } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import ScrollableAnchor from "react-scrollable-anchor";
import { Link, useHistory } from "react-router-dom";
import { injectIntl } from "react-intl";
import me from "../../assets/me.jpeg";

import "./styles.css";

function Home({ intl }) {
    const [isHomeActive, setHomeActive] = useState(true);
    const [isEducationActive, setEducationActive] = useState(false);
    const [isExperienceActive, setExperienceActive] = useState(false);
    const [isPortfolioActive, setPortfolioActive] = useState(false);
    const [isContactActive, setContactActive] = useState(false);

    const history = useHistory();

    const active = (nav) => {
        if (nav === "home") {
            setHomeActive(true);
            setEducationActive(false);
            setExperienceActive(false);
            setPortfolioActive(false);
            setContactActive(false);
        } else if (nav === "education") {
            setHomeActive(false);
            setEducationActive(true);
            setExperienceActive(false);
            setPortfolioActive(false);
            setContactActive(false);
        } else if (nav === "experience") {
            setHomeActive(false);
            setEducationActive(false);
            setExperienceActive(true);
            setPortfolioActive(false);
            setContactActive(false);
        } else if (nav === "portfolio") {
            setHomeActive(false);
            setEducationActive(false);
            setExperienceActive(false);
            setPortfolioActive(true);
            setContactActive(false);
        } else if (nav === "contact") {
            setHomeActive(false);
            setEducationActive(false);
            setExperienceActive(false);
            setPortfolioActive(false);
            setContactActive(true);
        }
    };

    const openProjectBeTheHero = () => {
        history.push("/project/beTheHero");
    };

    const openProjectHairShop = () => {
        history.push("/project/hairShop");
    };

    const openProjectWeather = () => {
        history.push("/project/weather");
    };

    let cv =
        intl.locale === "en-US"
            ? "https://1drv.ms/b/s!AnLrgYinS7ViiSCGyfY5XFkr1IiK"
            : "https://1drv.ms/w/s!AnLrgYinS7Vih3XACCdiYOneDjOW?e=KZiB15";

    const mdMin = window.matchMedia("(min-width: 480px)");
    const mdMax = window.matchMedia("(max-width: 767px)");

    return (
        <div className="page-container">
            <div className="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <img src={me} alt={"me"} />
                    </li>
                    {mdMin.matches && mdMax.matches ? (
                        <div className="flex-ul">
                            <li onClick={() => active("home")} className={isHomeActive ? "active" : "noActive"}>
                                <a href={"#home"} className="menu-item page-scroll">
                                    {intl.formatMessage({ id: "sidebar.home" })}
                                </a>
                            </li>
                            <li onClick={() => active("education")} className={isEducationActive ? "active" : "noActive"}>
                                <a href={"#education"} className="menu-item page-scroll">
                                    {intl.formatMessage({ id: "sidebar.education" })}
                                </a>
                            </li>
                            <li onClick={() => active("experience")} className={isExperienceActive ? "active" : "noActive"}>
                                <a href={"#experience"} className="menu-item page-scroll">
                                    {intl.formatMessage({ id: "sidebar.experience" })}
                                </a>
                            </li>
                            <li onClick={() => active("portfolio")} className={isPortfolioActive ? "active" : "noActive"}>
                                <a href={"#portfolio"} className="menu-item page-scroll">
                                    {intl.formatMessage({ id: "sidebar.portfolio" })}
                                </a>
                            </li>
                            <li onClick={() => active("contact")} className={isContactActive ? "active" : "noActive"}>
                                <a href={"#contact"} className="menu-item page-scroll">
                                    {intl.formatMessage({ id: "sidebar.contact" })}
                                </a>
                            </li>
                        </div>
                    ) : (
                        <div>
                            <li onClick={() => active("home")} className={isHomeActive ? "active" : "noActive"}>
                                <a href={"#home"} className="menu-item page-scroll">
                                    {intl.formatMessage({ id: "sidebar.home" })}
                                </a>
                            </li>
                            <li onClick={() => active("education")} className={isEducationActive ? "active" : "noActive"}>
                                <a href={"#education"} className="menu-item page-scroll">
                                    {intl.formatMessage({ id: "sidebar.education" })}
                                </a>
                            </li>
                            <li onClick={() => active("experience")} className={isExperienceActive ? "active" : "noActive"}>
                                <a href={"#experience"} className="menu-item page-scroll">
                                    {intl.formatMessage({ id: "sidebar.experience" })}
                                </a>
                            </li>
                            <li onClick={() => active("portfolio")} className={isPortfolioActive ? "active" : "noActive"}>
                                <a href={"#portfolio"} className="menu-item page-scroll">
                                    {intl.formatMessage({ id: "sidebar.portfolio" })}
                                </a>
                            </li>
                            <li onClick={() => active("contact")} className={isContactActive ? "active" : "noActive"}>
                                <a href={"#contact"} className="menu-item page-scroll">
                                    {intl.formatMessage({ id: "sidebar.contact" })}
                                </a>
                            </li>
                        </div>
                    )}
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
                <ScrollableAnchor id={"home"}>
                    <Header />
                </ScrollableAnchor>

                <ScrollableAnchor id={"education"}>
                    <section>
                        <div className="container">
                            <div className="page-header">
                                <h3>
                                    {intl.formatMessage({ id: "education.title" })}
                                    <span className="text-primary">.</span>
                                </h3>
                            </div>
                            <Education
                                startYear={"2018"}
                                endYear={"2019"}
                                institute={"IGTI"}
                                role={intl.formatMessage({ id: "education.roleIGTI" })}
                                location={"Belo Horizonte - MG"}
                                detail={intl.formatMessage({ id: "education.detailIGTI" })}
                            />
                            <Education
                                startYear={"2013"}
                                endYear={"2016"}
                                institute={"IFSP"}
                                role={intl.formatMessage({ id: "education.roleDegreeIFSP" })}
                                location={"Bragança Paulista - SP"}
                                detail={intl.formatMessage({ id: "education.detailDegreeIFSP" })}
                            />
                            <Education
                                startYear={"2011"}
                                endYear={"2012"}
                                institute={"IFSP"}
                                role={intl.formatMessage({ id: "education.roleIFSP" })}
                                location={"Bragança Paulista - SP"}
                                detail={intl.formatMessage({ id: "education.detailIFSP" })}
                            />
                        </div>
                    </section>
                </ScrollableAnchor>

                <ScrollableAnchor id={"experience"}>
                    <section>
                        <div className="container">
                            <div className="page-header">
                                <h3>
                                    {intl.formatMessage({ id: "experience.title" })}
                                    <span className="text-primary">.</span>
                                </h3>
                            </div>
                            <Experience
                                startYear={"Dec 2018"}
                                endYear={intl.formatMessage({ id: "experience.current" })}
                                company={"Opah IT Consulting"}
                                role={intl.formatMessage({ id: "experience.roleOpah" })}
                                location={"São Paulo - SP"}
                                detail={intl.formatMessage({ id: "experience.detailOpah" })}
                            />
                            <Experience
                                startYear={"Jun 2018"}
                                endYear={"Nov 2018"}
                                company={"Indra Company"}
                                role={intl.formatMessage({ id: "experience.roleIndra" })}
                                location={"Campinas - SP"}
                                detail={intl.formatMessage({ id: "experience.detailIndra" })}
                            />
                            <Experience
                                startYear={"Feb 2018"}
                                endYear={"Jun 2018"}
                                company={"Programmer's LTDA"}
                                role={intl.formatMessage({ id: "experience.roleProgrammers" })}
                                location={"Campinas - SP"}
                                detail={intl.formatMessage({ id: "experience.detailProgrammers" })}
                            />
                            <Experience
                                startYear={"Feb 2016"}
                                endYear={"Jan 2018"}
                                company={"agendaOS"}
                                role={intl.formatMessage({ id: "experience.roleAgendaOS" })}
                                location={"Bragança Paulista - SP"}
                                detail={intl.formatMessage({ id: "experience.detailAgendaOS" })}
                            />
                        </div>
                    </section>
                </ScrollableAnchor>

                <ScrollableAnchor id={"portfolio"}>
                    <section>
                        <div className="container padding-less">
                            <div className="page-header space-left">
                                <h3>
                                    Portfolio
                                    <span className="text-primary">.</span>
                                </h3>
                            </div>
                            <div className="portfolio">
                                <div className="project">
                                    <div className="hover-effect">
                                        <div className="img-responsive img-hero"></div>
                                        <Link onClick={openProjectBeTheHero} to="/project/beTheHero">
                                            <div className="overlay">
                                                <div className="see-more">{intl.formatMessage({ id: "see.more" })}</div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="project">
                                    <div className="hover-effect">
                                        <div className="img-responsive img-hair"></div>
                                        <Link onClick={openProjectHairShop} to="/project/hairShop">
                                            <div className="overlay">
                                                <div className="see-more">{intl.formatMessage({ id: "see.more" })}</div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="project">
                                    <div className="hover-effect">
                                        <div className="img-responsive img-weather"></div>
                                        <Link onClick={openProjectWeather} to="/project/weather">
                                            <div className="overlay">
                                                <div className="see-more">{intl.formatMessage({ id: "see.more" })}</div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollableAnchor>

                <ScrollableAnchor id={"contact"}>
                    <section>
                        <div className="container">
                            <div className="page-header">
                                <h3>
                                    {intl.formatMessage({ id: "contact.title" })}
                                    <span className="text-primary">.</span>
                                </h3>
                            </div>
                            <div className="contact-flex">
                                <div className="contact-content border-right">
                                    <div className="content">
                                        <div className="content-flex">
                                            <FiPhone size={21} color="#209cee" />
                                            <div className="content-name">{intl.formatMessage({ id: "contact.phone" })}</div>
                                        </div>
                                        <div className="content-info">+55 11 99842-4777</div>
                                    </div>
                                    <div className="content">
                                        <div className="content-flex">
                                            <FiMail size={21} color="#209cee" />
                                            <div className="content-name">{intl.formatMessage({ id: "contact.email" })}</div>
                                        </div>
                                        <div className="content-info">paculi@hotmail.com</div>
                                    </div>
                                    <div className="content">
                                        <div className="content-flex">
                                            <FiMap size={21} color="#209cee" />
                                            <div className="content-name">{intl.formatMessage({ id: "contact.city" })}</div>
                                        </div>
                                        <div className="content-info">São Paulo - SP</div>
                                    </div>
                                    <div className="content">
                                        <div className="content-flex">
                                            <FiGlobe size={21} color="#209cee" />
                                            <div className="content-name">{intl.formatMessage({ id: "contact.website" })}</div>
                                        </div>
                                        <div className="content-info">https://leonardopacciulli.netlify.com/</div>
                                    </div>
                                </div>
                                <div className="contact-content">
                                    <div className="content">
                                        <div className="content-midia">
                                            <a target="blank" href="https://www.linkedin.com/in/leonardo-pacciulli-a4b86a92/">
                                                <FiLinkedin size={50} color="#209cee" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="content-midia">
                                            <a target="blank" href="https://github.com/leopacciulli">
                                                <FiGithub size={50} color="#209cee" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="content-midia">
                                            <a target="blank" href="https://www.facebook.com/paculli">
                                                <FiFacebook size={50} color="#209cee" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="content-midia">
                                            <a target="blank" href="https://www.instagram.com/leopacciulli/?hl=pt-br">
                                                <FiInstagram size={50} color="#209cee" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollableAnchor>
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

export default injectIntl(Home);
