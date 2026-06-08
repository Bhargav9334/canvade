import { RightPanel } from "../Auth/AuthLayout";
import Onboarding from "./Onboarding";

export default function OnboardingLayout({ initialFlow }) {
  return (
    <div className="flex h-screen w-screen overflow-hidden font-sans">

      <div className="flex w-full flex-col items-center justify-center bg-white px-6 py-4 md:w-[50%] md:min-w-[380px]">
        <Onboarding initialFlow={initialFlow} />
      </div>

      <div className="hidden flex-1 md:flex">
        <RightPanel />
      </div>

    </div>
  );
}