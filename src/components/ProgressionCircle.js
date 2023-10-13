import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { render } from "react-dom";
import VisibilitySensor from "react-visibility-sensor";

function ProgressionCircle() {
  return (
    <div>
      <div style={{ width: "6rem" }}>
        <VisibilitySensor>
          {({ isVisible }) => {
            const percentage = isVisible ? 99 : 0;
            return (
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
            );
          }}
        </VisibilitySensor>
      </div>
    </div>
  );
}

export default ProgressionCircle;
