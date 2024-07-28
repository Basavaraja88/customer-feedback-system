import { useState } from "react";
import { formDataProps } from "../type";

interface Step2Props {
  formData: formDataProps;
  setFormData: React.Dispatch<React.SetStateAction<formDataProps>>;
  nextStep: () => void;
  prevStep: () => void;
}

const Step2: React.FC<Step2Props> = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) => {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (formData.emoji) {
      nextStep();
    } else {
      setError("Please select an emoji");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md border-[1px]">
      <h2 className="text-2xl font-bold mb-6">Step 2</h2>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => {
            setFormData({ ...formData, emoji: "sad" });
            setError("");
          }}
          className={`p-2 text-2xl rounded-full ${
            formData.emoji === "sad" ? "bg-blue-200" : "bg-gray-200"
          }`}
        >
          😢
        </button>
        <button
          onClick={() => {
            setFormData({ ...formData, emoji: "happy" });
            setError("");
          }}
          className={`p-2 text-2xl rounded-full ${
            formData.emoji === "happy" ? "bg-blue-200" : "bg-gray-200"
          }`}
        >
          😊
        </button>
        <button
          onClick={() => {
            setFormData({ ...formData, emoji: "excited" });
            setError("");
          }}
          className={`p-2 text-2xl rounded-full ${
            formData.emoji === "excited" ? "bg-blue-200" : "bg-gray-200"
          }`}
        >
          😆
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="p-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
