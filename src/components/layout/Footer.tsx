import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 text-center text-xs font-mono-tech text-[#a89cb9] border-t-3 border-[#ff2a85] bg-[#090511]">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div>
          K. HARSHAVARDHAN • CSE STUDENT AT ALLIANCE UNIVERSITY (2027)
        </div>
        <div className="text-[#ffcc00] font-silkscreen text-[10px] font-bold">
          AI/ML • SOFTWARE DEV • OPEN SOURCE
        </div>
      </div>
    </footer>
  );
};
