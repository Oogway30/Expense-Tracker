// components-app/SuccessBanner.tsx
import { useEffect, useState } from "react";

const SuccessBanner = ({ message }: { message: string }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000); // auto-hide after 3s
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-3 rounded-lg bg-[#3CB371] px-6 py-3 text-white shadow-lg animate-slide-in">
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
};

export default SuccessBanner;
