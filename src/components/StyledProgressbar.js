import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

function StyledProgressbar(props) {
  return (
    <CircularProgressbar
      percentage={props.percentage}
      text={props.text}
      // Path width must be customized with strokeWidth,
      // since it informs dimension calculations.
      strokeWidth={5}
      // You can override styles either by specifying this "styles" prop,
      // or by overriding the default CSS here:
      // https://github.com/iqnivek/react-circular-progressbar/blob/master/src/styles.css
      styles={{
        // Customize the root svg element
        root: {},
        // Customize the path, i.e. the part that's "complete"
        path: {
          // Tweak path color:
          stroke: "#f5f5f5",
          // Tweak path to use flat or rounded ends:
          strokeLinecap: "butt",
          // Tweak transition animation:
          transition: "stroke-dashoffset 0.5s ease 0s",
        },
        // Customize the circle behind the path
        trail: {
          // Tweak the trail color:
          stroke: "#2f82ee",
        },
        // Customize the text
        text: {
          // Tweak text color:
          fill: "#f5f5f5",
          // Tweak text size:
          fontSize: "1rem",
        },
      }}
    />
  );
}
export default StyledProgressbar;
