import React, { useEffect, useRef } from 'react';

export default function DitheredImageCanvas() {
const canvasRef = useRef(null);
const glowCanvasRef = useRef(null);
const animationFrameRef = useRef(null);
const imageDataRef = useRef(null);
const dimensionsRef = useRef({ offsetX: 0, offsetY: 0, drawWidth: 0, drawHeight: 0 });
const particlesRef = useRef([]);

const bayerMatrix = [
[0, 8, 2, 10],
[12, 4, 14, 6],
[3, 11, 1, 9],
[15, 7, 13, 5]
];

useEffect(() => {
const canvas = canvasRef.current;
const glowCanvas = glowCanvasRef.current;
if (!canvas || !glowCanvas) return;

text

const ctx = canvas.getContext('2d', { willReadFrequently: true });
const glowCtx = glowCanvas.getContext('2d');

const img = new Image();
img.crossOrigin = 'anonymous';
img.src = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692276e379c335a94557feca/f13f79acc_6512b588-a17d-429e-8277-43aeafa5152b_removalai_preview.png';

const handleResize = () => {
  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;
  
  canvas.width = containerWidth;
  canvas.height = containerHeight;
  glowCanvas.width = containerWidth;
  glowCanvas.height = containerHeight;

  if (img.complete) {
    prepareImageData();
  }
};

const prepareImageData = () => {
  const containerWidth = canvas.width;
  const containerHeight = canvas.height;

  const padding = 100;
  const maxWidth = containerWidth - padding * 2;
  const maxHeight = containerHeight - padding * 2;
  
  const imgAspect = img.width / img.height;
  let drawWidth, drawHeight;
  
  if (maxWidth / maxHeight > imgAspect) {
    drawHeight = maxHeight;
    drawWidth = drawHeight * imgAspect;
  } else {
    drawWidth = maxWidth;
    drawHeight = drawWidth / imgAspect;
  }

  const offsetX = (containerWidth - drawWidth) / 2;
  const offsetY = (containerHeight - drawHeight) / 2;

  dimensionsRef.current = { offsetX, offsetY, drawWidth, drawHeight };

  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = drawWidth;
  tempCanvas.height = drawHeight;
  const tempCtx = tempCanvas.getContext('2d');
  tempCtx.drawImage(img, 0, 0, drawWidth, drawHeight);

  const imageData = tempCtx.getImageData(0, 0, drawWidth, drawHeight);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const alpha = data[i + 3];
    
    if (alpha > 0) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      let gray = 0.299 * r + 0.587 * g + 0.114 * b;

      gray = (gray - 128) * 1.8 + 128;
      gray = Math.pow(gray / 255, 0.7) * 255;
      gray = Math.max(0, Math.min(255, gray));

      data[i] = gray;
      data[i + 1] = gray;
      data[i + 2] = gray;
    }
  }

  imageDataRef.current = imageData;

  const particleCount = 80;
  particlesRef.current = Array.from({ length: particleCount }, (_, i) => ({
    x: Math.random() * containerWidth,
    y: Math.random() * containerHeight,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    size: Math.random() * 2 + 1,
    isBlue: i < particleCount * 0.45
  }));
};

let thresholdOffset = 0;
let frameCount = 0;
const animate = () => {
  if (!canvas || !img.complete || !imageDataRef.current) return;

  const { offsetX, offsetY, drawWidth, drawHeight } = dimensionsRef.current;
  const sourceData = imageDataRef.current.data;

  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const outputCanvas = document.createElement('canvas');
  outputCanvas.width = drawWidth;
  outputCanvas.height = drawHeight;
  const outputCtx = outputCanvas.getContext('2d');
  const outputImageData = outputCtx.createImageData(drawWidth, drawHeight);
  const outputData = outputImageData.data;

  thresholdOffset += 0.045;
  frameCount++;
  const thresholdShift = Math.sin(thresholdOffset) * 45 + 35;

  for (let y = 0; y < drawHeight; y++) {
    for (let x = 0; x < drawWidth; x++) {
      const idx = (y * drawWidth + x) * 4;
      const alpha = sourceData[idx + 3];

      if (alpha < 0.01) {
        outputData[idx] = 0;
        outputData[idx + 1] = 0;
        outputData[idx + 2] = 0;
        outputData[idx + 3] = 0;
        continue;
      }

      const gray = sourceData[idx];

      const pixelSeed = (x * 7919 + y * 6553) % 1000;
      const temporalJitter = Math.sin(thresholdOffset * 2.5 + pixelSeed * 0.01) * 30;

      const bayerValue = bayerMatrix[y % 4][x % 4];
      const baseThreshold = (bayerValue / 16) * 255 + thresholdShift + temporalJitter;

      let finalThreshold = baseThreshold;
      const distanceFromThreshold = Math.abs(gray - baseThreshold);
      
      const isDarkRegion = gray < 100;
      const flickerProbability = isDarkRegion ? 0.08 : 0.04;
      
      if (distanceFromThreshold < 40 && Math.random() < flickerProbability) {
        finalThreshold += (Math.random() - 0.5) * 60;
      }

      if (gray < 80 && Math.random() < 0.12) {
        const noiseBoost = Math.sin(frameCount * 0.3 + pixelSeed * 0.02) * 50;
        finalThreshold += noiseBoost;
      }

      if (gray > finalThreshold) {
        outputData[idx] = 0x76;
        outputData[idx + 1] = 0xc4;
        outputData[idx + 2] = 0xff;
      } else {
        outputData[idx] = 5;
        outputData[idx + 1] = 5;
        outputData[idx + 2] = 5;
      }
      outputData[idx + 3] = alpha;
    }
  }

  outputCtx.putImageData(outputImageData, 0, 0);
  
  ctx.save();
  ctx.beginPath();
  ctx.rect(offsetX, offsetY, drawWidth, drawHeight);
  ctx.clip();
  ctx.drawImage(outputCanvas, offsetX, offsetY);
  ctx.restore();

  glowCtx.fillStyle = '#000000';
  glowCtx.fillRect(0, 0, glowCanvas.width, glowCanvas.height);
  glowCtx.drawImage(canvas, 0, 0);

  const blurIntensity = 10 + Math.sin(thresholdOffset * 0.8) * 2;
  glowCtx.filter = `blur(${blurIntensity}px)`;
  glowCtx.globalCompositeOperation = 'screen';
  glowCtx.globalAlpha = 0.7;
  glowCtx.drawImage(canvas, 0, 0);

  glowCtx.filter = 'none';
  glowCtx.globalCompositeOperation = 'source-over';
  glowCtx.globalAlpha = 1;

  glowCtx.save();
  particlesRef.current.forEach(particle => {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < 0) particle.x = canvas.width;
    if (particle.x > canvas.width) particle.x = 0;
    if (particle.y < 0) particle.y = canvas.height;
    if (particle.y > canvas.height) particle.y = 0;

    glowCtx.beginPath();
    glowCtx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    glowCtx.fillStyle = particle.isBlue ? '#76c4ff' : '#ffffff';
    glowCtx.globalAlpha = 0.6;
    glowCtx.fill();
  });
  glowCtx.restore();

  animationFrameRef.current = requestAnimationFrame(animate);
};

img.onload = () => {
  handleResize();
  animate();
};

window.addEventListener('resize', handleResize);

return () => {
  window.removeEventListener('resize', handleResize);
  if (animationFrameRef.current) {
    cancelAnimationFrame(animationFrameRef.current);
  }
};
}, []);

return (
<div className="relative w-full h-screen overflow-hidden bg-black">
<canvas
ref={canvasRef}
className="absolute inset-0 w-full h-full"
style={{ imageRendering: 'pixelated' }}
/>
<canvas ref={glowCanvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

text

  <div className="relative z-10 h-full flex items-center justify-center">
    <div className="text-center px-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight leading-tight">
        We're pfrotos. We develop custom AI<br />
        solutions for innovative companies.
      </h1>
      
      <button 
        onClick={() => {
          const element = document.querySelector('#booking');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="mt-8 px-6 py-2.5 bg-white/[0.08] border border-white/[0.15] rounded-full text-sm text-gray-300 font-light hover:bg-white/[0.12] hover:border-white/[0.25] transition-all duration-300"
      >
        Get in touch
      </button>
    </div>
  </div>
</div>
);
}
