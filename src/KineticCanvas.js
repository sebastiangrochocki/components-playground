import React, { useEffect, useRef } from "react";

const KineticCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(
    () => {
      const c = canvasRef.current;
      const ctx = c.getContext("2d");
      const wh = 128;
      const w2h = wh * wh;
      c.width = window.innerWidth;
      c.height = window.innerHeight;
      const img = ctx.createImageData(wh, wh);
      const id = img.data;
      let t = 0;
      const inc = 1 / wh;
      const arr = [];

      for (let k = 0; k < w2h; ++k) {
        arr[k] = Math.random() * 1.5 - 0.5;
      }

      function draw() {
        window.requestAnimationFrame(draw);
        t += inc;
        for (let x = 1; x >= 0; x -= inc) {
          for (let y = 1; y >= 0; y -= inc) {
            const idx = (y * wh + x) * wh * 4;
            const dx = x;
            const dy = y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const ax = oct(x, y);
            const ay = oct(x + 2, y + t / 3);
            const bx = oct(x + dist * 0.3 + ax / 22 + 0.7, y + ay / 5 + 2);
            const by = oct(x + ax / 3 + 4 * t, y + ay / 3 + 5);
            const n = oct(x + bx / 5, y + by / 2) * 0.7 + 0.15;
            const d = (ax * by) / 2;
            const e = (ay * bx) / 2;

            const gray = hue(n + d / 5);
            id[idx + 0] = gray;
            id[idx + 1] = gray;
            id[idx + 2] = gray;
            id[idx + 3] = hue(1 - ease(dist) * (e + d) * 5);
          }
        }

        // Clear the canvas before drawing
        ctx.clearRect(0, 0, c.width, c.height);

        // Draw the image data to a small canvas
        const offscreenCanvas = document.createElement("canvas");
        offscreenCanvas.width = wh;
        offscreenCanvas.height = wh;
        const offscreenCtx = offscreenCanvas.getContext("2d");
        offscreenCtx.putImageData(img, 0, 0);

        // Scale the offscreen canvas to fill the main canvas
        ctx.drawImage(offscreenCanvas, 0, 0, c.width, c.height);
      }

      function hue($) {
        return 255 * Math.min(Math.max($, 0), 1);
      }

      function ease(x) {
        return x > 0.2 ? 0 : interpolate(1, 0, x * 6);
      }

      function interpolate(start, end, t) {
        t = t * t * t * (6 * t * t - 15 * t + 10);
        return start + (end - start) * t;
      }

      function noise(x, y) {
        const i = Math.abs(x * wh + y) % w2h;
        return arr[i];
      }

      function oct(x, y) {
        const o1 = perlin(x * 3.0, y * 4.0);
        const o2 = perlin(x * 4.0, y * 5.0);
        return o1 + o2 * 0.5;
      }

      function perlin(x, y) {
        const nx = Math.floor(x);
        const ny = Math.floor(y);
        return interpolate(
          interpolate(noise(nx, ny), noise(nx + 1, ny), x - nx),
          interpolate(noise(nx, ny + 1), noise(nx + 1, ny + 1), x - nx),
          y - ny
        );
      }

      draw();
    },
    [],
    250
  );

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100vw",
        height: "100vh",
        display: "block",
        position: "fixed",
        inset: "0",
        zIndex: "0",
        filter: "opacity(0.1)",
      }}
    />
  );
};

export default KineticCanvas;
