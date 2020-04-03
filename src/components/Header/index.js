import React from "react";
import { injectIntl } from "react-intl";

import "./styles.css";

function Header({ intl }) {
    return (
        <div className="container-fluid">
            <div className="header-bg"></div>
            <header>
                <div className="header-content">
                    <h2>
                        {intl.formatMessage({ id: "header.hello" })}
                        <span className="text-primary">.</span> {intl.formatMessage({ id: "header.me" })}{" "}
                        <span className="text-primary">Leonardo Pacciulli</span>
                    </h2>
                    <h5>{intl.formatMessage({ id: "header.position" })}: React.js / React Native</h5>
                    <p>{intl.formatMessage({ id: "header.description" })}</p>
                </div>
            </header>
        </div>
    );
}

export default injectIntl(Header);
