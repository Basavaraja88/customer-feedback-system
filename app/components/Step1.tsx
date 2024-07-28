"use client";
import { useState } from "react";
import { formDataProps } from "../type";

interface Step1Props {
  formData: formDataProps;
  setFormData: React.Dispatch<React.SetStateAction<formDataProps>>;
  nextStep: () => void;
}

const Step1: React.FC<Step1Props> = ({ formData, setFormData, nextStep }) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    let tempErrors: { [key: string]: string } = {};

    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.number) {
      tempErrors.number = "Number is required";
    } else if (!/^\d{10}$/.test(formData.number)) {
      tempErrors.number = "Invalid phone number";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) nextStep();
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md border-[1px]">
      <h2 className="text-2xl font-bold mb-6">Step 1</h2>
      <div className="space-y-4">
        <div>
          <label className="pb-2 block text-sm font-medium text-gray-700">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full p-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="pb-2 block text-sm font-medium text-gray-700">
            Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Number"
            value={formData.number}
            onChange={(e) =>
              setFormData({ ...formData, number: e.target.value })
            }
            className={`w-full p-2 border ${
              errors.number ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.number && (
            <p className="text-red-500 text-sm">{errors.number}</p>
          )}
        </div>
        <div>
          <label className="pb-2 block text-sm font-medium text-gray-700">
            State
          </label>
          <input
            type="text"
            placeholder="State"
            value={formData.state}
            onChange={(e) =>
              setFormData({ ...formData, state: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="pb-2 block text-sm font-medium text-gray-700">
            District
          </label>
          <input
            type="text"
            placeholder="District"
            value={formData.district}
            onChange={(e) =>
              setFormData({ ...formData, district: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="pb-2 block text-sm font-medium text-gray-700">
            Pincode
          </label>
          <input
            type="text"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={(e) =>
              setFormData({ ...formData, pincode: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <button
        onClick={handleNext}
        className="mt-6 w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
