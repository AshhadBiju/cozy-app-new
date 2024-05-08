import { Stepper } from "react-form-stepper";

const CustomStepper = () => {
  return (
    <Stepper
      steps={[
        { label: "Address" },
        { label: "Shipping" },
        { label: "Payment" },
      ]}
      // activeStep={1}
      className="flex gap-10"
      // activeColor="#17183B"
      // disabledColor="#A2A3B1"
      inactiveBgColor="#A2A3B1"
      completedTextColor="#17183B"
    />
  );
};

export default CustomStepper;
