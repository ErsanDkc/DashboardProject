// src/components/AuthLayout.jsx
import clockHand from "/clock-hand.svg";
import MagloLogo from "/maglo-logo.svg"; 

export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="flex justify-center min-h-screen overflow-hidden">
      <div className="min-h-screen max-w-[1440px] grid lg:grid-cols-2">
        <div className="flex items-center justify-center p-6 lg:p-16">
          <div className="w-full h-full max-w-sm flex flex-col gap-[157px]"> 
            <div className="flex items-center "> 
              <img src={MagloLogo} alt="Maglo Logo" className="h-8 w-auto" /> 
            </div>
            <div>
            <div className="mb-8"> 
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                {title} 
              </h2>
              <p className="mt-2 text-base text-gray-600">
                {subtitle} 
              </p>
            </div>
            {children}
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center ">
          <img
            src={clockHand}
            alt="Clock hand"
            className="object-cover h-[100vh] w-full"
          />
        </div>
      </div>
    </div>
  );
}