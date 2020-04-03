import React from "react";

import brazil from "../../assets/brazil.png";
import eua from "../../assets/eua.png";

import "./styles.css";

export default function Select({ value, onChange, options }) {
    return (
        <div className="select-default">
            <div className="flex-flag">
                <img onClick={() => onChange("pt-BR")} src={brazil} alt="brazil" className={value === "pt-BR" ? "flag-selected" : "flag-not-selected"}/>
                <img onClick={() => onChange("en-US")} src={eua} alt="eua" className={value === "en-US" ? "flag-selected" : "flag-not-selected"} />
            </div>
        </div>
    );
}
