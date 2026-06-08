import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3"; 
import Step4 from "./Step4"; 
import Canvadelogin from "../../pages/Canvadelogin";
import Signup from "../Auth/Signup";

export default function Onboarding({ initialFlow }) {
  const startFlow = initialFlow === "login" || initialFlow === "signup" ? initialFlow : "";
  const [step, setStep] = useState(startFlow ? 2 : 1);
  const [userChoice, setUserChoice] = useState(
    startFlow ? { role: "student", flow: startFlow } : { role: "", flow: "" }
  );
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    if (data && data.role) setUserChoice(data);
    setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const triggerSignup = () => {
    setUserChoice({ role: "student", flow: "signup" });
    setStep(2);
  };

  return (
    <div className="w-full max-w-[400px] flex flex-col items-center">
      
      <div className="mb-8 flex justify-center gap-2">
        {[1, 2, 3, 4, 5].map((s) => (
          <div 
            key={s} 
            className={`h-1.5 rounded-full transition-all duration-300 ${
              step === s ? "bg-emerald-500 w-8" : "bg-gray-200 w-4"
            }`} 
          />
        ))}
      </div>

      {step === 1 && <Step1 next={handleNext} onSignupClick={triggerSignup} />}
      
      {step === 2 && (
        userChoice.flow === "signup" ? (
          <Signup 
            onSignupSuccess={() => setStep(3)} 
            switchToLogin={() => setUserChoice({ ...userChoice, flow: "login" })} 
          />
        ) : (
          <Canvadelogin 
            onLoginSuccess={() => setStep(3)} 
            onSignUpClick={triggerSignup} 
          />
        )
      )}

      {step === 3 && <Step2 next={handleNext} back={handleBack} />}

      {step === 4 && <Step3 next={handleNext} back={handleBack} />}

      {step === 5 && <Step4 back={handleBack} formData={formData} />}

    </div>
  );
}