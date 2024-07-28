"use client";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { formDataProps } from "../type";
import { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<formDataProps>({
    name: "",
    number: "",
    state: "",
    district: "",
    pincode: "",
    emoji: "",
    videoUrl: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const submitForm = async () => {
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Feedback submitted successfully!");
      setFormData({
        name: "",
        number: "",
        state: "",
        district: "",
        pincode: "",
        emoji: "",
        videoUrl: "",
      });
      setStep(1);
    } else {
      alert(JSON.stringify(formData, null, 2));
    }
  };

  switch (step) {
    case 1:
      return (
        <Step1
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <Step2
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <Step3
          formData={formData}
          setFormData={setFormData}
          prevStep={prevStep}
          submitForm={submitForm}
        />
      );
    default:
      return <div />;
  }
};

export default MultiStepForm;
