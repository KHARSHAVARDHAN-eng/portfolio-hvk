import { useState } from 'react';
import { CustomCursor } from './components/ui/CustomCursor';

export function App() {
  const [crtEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-[#0c0617] text-[#ffffff] relative font-chakra overflow-x-hidden">
      {/* Custom Arcade Cursor */}
      <CustomCursor />

      {/* CRT Scanline Filter Overlay */}
      {crtEnabled && (
        <>
          <div className="crt-overlay" />
          <div className="crt-vignette" />
        </>
      )}

      {/* Clean Reset Viewport - Ready for Next UI Implementation */}
      <main className="min-h-screen w-full relative z-10" />
    </div>
  );
}

export default App;
