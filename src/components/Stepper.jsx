// import { Stepper } from "react-form-stepper";

// const CustomStepper = () => {
//   return (
//     <Stepper
//       steps={[
//         { label: "Address" },
//         { label: "Shipping" },
//         { label: "Payment" },
//       ]}
//       className="flex gap-10"
//       inactiveBgColor="#A2A3B1"
//       completedTextColor="#17183B"
//     />
//   );
// };

// export default CustomStepper;
// Stepper.js

// "use client";
// import React from "react";

// const steps = [
//   { id: 1, title: " 1" },
//   { id: 2, title: " 2" },
//   { id: 3, title: " 3" },
//   { id: 4, title: " 4" },
// ];

// const Stepper = ({ currentStep }) => {
//   return (
//     <div className="flex items-center justify-between">
//       {steps.map((step, index) => (
//         <div
//           key={step.id}
//           className={`flex items-center ${
//             index + 1 === currentStep ? "text-blue-500" : "text-gray-500"
//           }`}
//         >
//           <span className="text-sm mr-1">{step.title}</span>
//           {index !== steps.length - 1 && (
//             <div
//               className={`h-1 w-8 ${
//                 index + 1 < currentStep ? "bg-blue-900" : "bg-gray-300"
//               }`}
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Stepper;
"use client";
import React from "react";

export default function Stepper({ currentStep, numberOfSteps }) {
  const activeColor = (index) =>
    currentStep >= index ? "bg-blue-500" : "bg-gray-300";
  const isFinalStep = (index) => index === numberOfSteps - 1;

  return (
    <div className="flex items-center">
      {Array.from({ length: numberOfSteps }).map((_, index) => (
        <React.Fragment key={index}>
          <div className={`w-6 h-6 rounded-full ${activeColor(index)}`}></div>
          {isFinalStep(index) ? null : (
            <div className={`w-12 h-1 ${activeColor(index)}`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
