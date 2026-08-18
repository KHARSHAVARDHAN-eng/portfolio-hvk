import { useState } from 'react';
import { CustomCursor } from './components/ui/CustomCursor';

/**
 * Root Application Container
 * Manages global CRT scanline overlays, global custom cursor, and view router integration.
 */
export function App() {
  const [crtEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-[#0c0617] text-[#ffffff] relative font-chakra overflow-x-hidden">
      {/* Custom Retro Arcade Pixel Pointer Cursor */}
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
