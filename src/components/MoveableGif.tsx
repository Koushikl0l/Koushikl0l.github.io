import { useState, useEffect, useRef } from "react";
import lechatGif from "@/assets/gif/lechat-gif.gif";

const SIZE = 140;
const PADDING = 24;
const TOTAL_HEIGHT = SIZE + 28;
const SPEED = 2.8;
const JITTER = 0.4;

const randomVelocity = () => (Math.random() - 0.5) * 2 * SPEED;


const MoveableGif = () => {
  const [position, setPosition] = useState({ x: PADDING, y: 120 });
  const posRef = useRef(position);
  const velocity = useRef({ vx: randomVelocity(), vy: randomVelocity() });
  posRef.current = position;

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const maxY = Math.max(0, h - TOTAL_HEIGHT - PADDING);
    const initial = {
      x: PADDING + Math.random() * Math.max(0, w - SIZE - 2 * PADDING),
      y: PADDING + Math.random() * (maxY - PADDING),
    };
    posRef.current = initial;
    setPosition(initial);
    velocity.current = { vx: randomVelocity(), vy: randomVelocity() };
  }, []);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const p = posRef.current;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const maxY = Math.max(0, h - TOTAL_HEIGHT - PADDING);
      let { vx, vy } = velocity.current;
      let x = p.x + vx;
      let y = p.y + vy;
      if (x <= PADDING) {
        x = PADDING;
        vx = Math.abs(vx) * (0.8 + Math.random() * JITTER);
      }
      if (x >= w - SIZE - PADDING) {
        x = w - SIZE - PADDING;
        vx = -Math.abs(vx) * (0.8 + Math.random() * JITTER);
      }
      if (y <= PADDING) {
        y = PADDING;
        vy = Math.abs(vy) * (0.8 + Math.random() * JITTER);
      }
      if (y >= maxY) {
        y = maxY;
        vy = -Math.abs(vy) * (0.8 + Math.random() * JITTER);
      }
      x = Math.max(PADDING, Math.min(w - SIZE - PADDING, x));
      velocity.current = { vx, vy };
      posRef.current = { x, y };
      setPosition({ x, y });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      role="presentation"
      className="pointer-events-none fixed z-20 flex flex-col items-center gap-1 will-change-transform"
      style={{
        left: position.x,
        top: position.y,
        width: SIZE,
      }}
    >
      <div
        role="img"
        aria-label="Decorative moving element"
        className="w-full shrink-0"
        style={{ width: SIZE, height: SIZE }}
      >
        <img
          src={lechatGif}
          alt=""
          className="h-full w-full object-contain"
          draggable={false}
        />
      </div>
      <a
        href="mailto:koushik@shustho.life"
        onClick={(e) => e.stopPropagation()}
        className="pointer-events-auto text-xs font-bold uppercase tracking-wider text-foreground/90 hover:text-foreground underline underline-offset-2 cursor-pointer"
      >
        Let&apos;s talk
      </a>
    </div>
  );
};

export default MoveableGif;
