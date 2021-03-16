import React from "react";

import { isMobileDevice } from "./isMobileDevice";
import "./Widget.scss";

const isMobile = isMobileDevice();

export function Widget() {
  return (
    <div className={`container ${isMobile ? "mobile" : "desktop"}`}>
      timeline
    </div>
  );
}
