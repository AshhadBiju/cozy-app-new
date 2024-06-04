// "use client";
// import React from "react";

// const ColorComponent = ({ color }) => (
//   <div className={`bg-${color} rounded-full p-[0.670rem]`}></div>
// );

// const ColorComponents = ({ colors }) => (
//   <div className="flex gap-4 my-9">
//     {colors.map((color, index) => (
//       <ColorComponent key={index} color={color} />
//     ))}
//   </div>
// );

// export default ColorComponents;
// ColoredCircles.js
import React from "react";

const defaultColors = ["#C1BDB3", "#58737D", "#545454", "#CBA5A5"];
const ColorBubbles = ({ colors = defaultColors }) => {
  return (
    <div className="flex gap-4 my-9">
      {colors.map((color, index) => (
        <div
          key={index}
          className="rounded-full p-[0.670rem]"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
};

export default ColorBubbles;
