import React from "react";

export default function Education({ startYear, endYear, institute, role, location, detail }) {
    return (
        <div className="timeline border-color">
            <div className="timeline-item">
                <div className="timeline-point off-timeline-point point-color"></div>
                <div className="row">
                    <div className="col-md-3 timeline-info">
                        <div className="timeline-date">
                            {startYear} - {endYear}
                        </div>
                        <h4 className="timeline-com">{institute}</h4>
                        <h6 className="timeline-role">{role}</h6>
                        <div className="timeline-location">{location}</div>
                    </div>
                    <div className="col-md-9 timeline-details">
                        <p>{detail}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
