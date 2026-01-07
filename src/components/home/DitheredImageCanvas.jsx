import React, { useEffect, useRef } from 'react';
import React, { useEffect, useRef, useState } from 'react';

export default function DitheredImageCanvas() {
const canvasRef = useRef(null);
@@ -7,6 +7,14 @@ export default function DitheredImageCanvas() {
const imageDataRef = useRef(null);
const dimensionsRef = useRef({ offsetX: 0, offsetY: 0, drawWidth: 0, drawHeight: 0 });
const particlesRef = useRef([]);
  
  // State to track image position for text overlay positioning
  const [imagePosition, setImagePosition] = useState({
    offsetX: 0,
    offsetY: 0,
    drawWidth: 0,
    drawHeight: 0
  });

const bayerMatrix = [
[0, 8, 2, 10],
@@ -64,6 +72,9 @@ export default function DitheredImageCanvas() {
const offsetY = (containerHeight - drawHeight) / 2;

dimensionsRef.current = { offsetX, offsetY, drawWidth, drawHeight };
      
      // Update state for text positioning
      setImagePosition({ offsetX, offsetY, drawWidth, drawHeight });

const tempCanvas = document.createElement('canvas');
tempCanvas.width = drawWidth;
@@ -248,11 +259,20 @@ export default function DitheredImageCanvas() {
className="absolute inset-0 w-full h-full pointer-events-none"
/>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight leading-tight">
            We're pfrotos. We develop custom AI<br />
            solutions for innovative companies.
      {/* Text overlay positioned exactly in the center of the camera icon */}
      <div 
        className="absolute z-10 flex items-center justify-center pointer-events-none"
        style={{
          left: `${imagePosition.offsetX}px`,
          top: `${imagePosition.offsetY}px`,
          width: `${imagePosition.drawWidth}px`,
          height: `${imagePosition.drawHeight}px`,
        }}
      >
        <div className="text-center px-4 sm:px-6 md:px-8 max-w-[90%] sm:max-w-[85%] md:max-w-[80%] pointer-events-auto">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light text-white mb-4 sm:mb-6 tracking-tight leading-snug sm:leading-tight">
            <span className="block">We're pfrotos. We develop custom AI</span>
            <span className="block">solutions for innovative companies.</span>
</h1>

<button 
@@ -262,7 +282,7 @@ export default function DitheredImageCanvas() {
element.scrollIntoView({ behavior: 'smooth' });
}
}}
            className="mt-8 px-6 py-2.5 bg-white/[0.08] border border-white/[0.15] rounded-full text-sm text-gray-300 font-light hover:bg-white/[0.12] hover:border-white/[0.25] transition-all duration-300"
            className="mt-4 sm:mt-6 md:mt-8 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 bg-white/[0.08] border border-white/[0.15] rounded-full text-xs sm:text-sm text-gray-300 font-light hover:bg-white/[0.12] hover:border-white/[0.25] transition-all duration-300"
>
Get in touch
</button>
