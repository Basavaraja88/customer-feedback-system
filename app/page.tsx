import MultiStepForm from "./components/MultiStepForm";

export default function Home() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/th.jpg')" }}
    >
      <div>
        <h1 className="text-center py-10 font-bold text-[40px]">
          Customer Feedback
        </h1>
        <div className=" px-4 ">
          <MultiStepForm />
        </div>
      </div>
    </div>
  );
}
