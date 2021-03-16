import React from "react";
import "./all-icons-style.scss";
import { Icon } from "./Icon.js";
import { IconBar } from "./IconBar";

export const Shelter = IconBar(ShelterIcon);

function ShelterIcon(props) {
  return (
    <Icon {...props}>
      <g>
        <g>
          <g>
            <path
              className="st0"
              d="M549.5,413.8c-81.4,0-142.7,55.5-142.7,129.1c0,11.3,9.1,20.4,20.4,20.4c11.3,0,20.4-9.1,20.4-20.4
				c0-32.8,18.6-60.2,47.6-75.4v123.1l0,0v210.7c0,11.3,9.1,20.4,20.4,20.4c11.3,0,20.4-9.1,20.4-20.4V631.4h27.2v169.9
				c0,11.3,9.1,20.4,20.4,20.4s20.4-9.1,20.4-20.4V605.6v-15V467.5c29,15.2,47.6,42.7,47.6,75.4c0,11.3,9.1,20.4,20.4,20.4
				s20.4-9.1,20.4-20.4C692.2,469.3,630.9,413.8,549.5,413.8z"
            />
            <circle className="st0" cx="550.2" cy="346" r="40.8" />
            <path
              className="st0"
              d="M858.8,343.8L566.6,173.9c-10.6-6.1-23.6-6.1-34.2,0L240.2,343.8c-10.5,6.1-16.9,17.3-16.9,29.4v414.6
				c0,18.8,15.2,34,34,34s34-15.2,34-34v-395l258.2-150.1l258.2,150.1v395c0,18.8,15.2,34,34,34s34-15.2,34-34V373.1
				C875.7,361,869.3,349.8,858.8,343.8z"
            />
          </g>
        </g>
      </g>
    </Icon>
  );
}