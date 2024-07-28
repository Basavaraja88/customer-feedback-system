"use client";
import { useState } from "react";
import { formDataProps } from "../type";

interface Step3Props {
  formData: formDataProps;
  setFormData: React.Dispatch<React.SetStateAction<formDataProps>>;
  prevStep: () => void;
  submitForm: () => Promise<void>;
}

const Step3: React.FC<Step3Props> = ({
  formData,
  setFormData,
  prevStep,
  submitForm,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && file.size <= 65000000) {
      const video = document.createElement("video");
      video.preload = "metadata";
      video.onloadedmetadata = () => {
        window.URL.revokeObjectURL(video.src);
        if (video.duration <= 65) {
          setError(null);
          setFormData({ ...formData, videoUrl: URL.createObjectURL(file) });
        } else {
          setError("Video duration should not exceed 65 seconds");
        }
      };
      video.src = URL.createObjectURL(file);
    } else {
      setError("Video size should be less than 65 MB");
    }
  };

  const handleSubmit = () => {
    if (!formData.videoUrl) {
      setError("Please upload a video review");
      return;
    }
    submitForm();
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md border-[1px]">
      <h2 className="text-2xl font-bold mb-6">Step 3</h2>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Upload Video Review (65-second limit)
        </label>
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      {formData.videoUrl && (
        <div className="mb-6">
          <video
            src={formData.videoUrl}
            controls
            className="w-full rounded-md"
          />
        </div>
      )}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="p-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step3;
