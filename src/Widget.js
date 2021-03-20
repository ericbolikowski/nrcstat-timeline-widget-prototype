import React from "react";

import { isMobileDevice } from "./isMobileDevice";
import "./Widget.scss";

const isMobile = isMobileDevice();

export function Widget() {
  return (
    <div className={`container ${isMobile ? "mobile" : "desktop"}`}>
      <div className="timeline-entry">
        <div className="timeline-marker" />
        <div className="timeline-content-line" />
        <div className="timeline-content">
          <span className="timeline-entry-title">5th & 6th November 2017</span>
          <span className="timeline-entry-subtitle">Border blocade</span>
          <span className="timeline-entry-body">
            Saudi-led Coalition imposed a full blockade on Yemen’s airports,
            seaports and land borders, purportedly as a measure to stop the
            importation of weapons into Yemen following interception by the
            Saudi military of a ballistic missile fired at Riyadh. Air and sea
            ports in areas under the control of the internationally- recognised
            government of Yemen (GoY) remained closed for eleven days, while
            critical sea ports along Yemen’s west coast were shut down for a
            period of more than seven weeks and only partially reopened
            thereafter.
            <div className="fade-out-last-line" />
            <button className="past-fade-out-expand-button">expand</button>
          </span>
        </div>
      </div>
      <div className="timeline-entry">
        <div className="timeline-marker" />
        <div className="timeline-content-line" />
        <div className="timeline-content">
          <span className="timeline-entry-title">26th of October 2018</span>
          <span className="timeline-entry-body">
            As of the 26th of October, Yemeni Riyal was set at 720.18 to one USD
            by International bank of Yemeni.
            <div className="fade-out-last-line" />
          </span>
        </div>
      </div>
      <div className="timeline-entry">
        <div className="timeline-marker" />
        <div className="timeline-content-line" />
        <div className="timeline-content">
          <span className="timeline-entry-title">Current situation</span>
          <span className="timeline-entry-subtitle">
            12 million people at imminent risk of famine
          </span>
          <span className="timeline-entry-body">
            More than 16 million people don’t have access to safe water,
            sanitation and hygiene and are extremely vulnerable to communicable
            disease outbreaks and factors that exacerbate the health causes of
            famine mortality.
            <div className="fade-out-last-line" />
          </span>
        </div>
      </div>
    </div>
  );
}
