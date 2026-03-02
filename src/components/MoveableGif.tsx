import { useState, useEffect, useRef } from "react";
import lechatGif from "@/assets/gif/lechat-gif.gif";

const SIZE = 140;
const PADDING = 24;
const TOTAL_HEIGHT = SIZE + 28;
const SPEED = 2.8;
const JITTER = 0.4;
const CONTENT_WIDTH = 700;
const CONTENT_PAD = 16;

const randomVelocity = () => (Math.random() - 0.5) * 2 * SPEED;

const getContentBounds = (w: number) => {
  const contentLeft = (w - CONTENT_WIDTH) / 2 - CONTENT_PAD;
  const contentRight = (w + CONTENT_WIDTH) / 2 + CONTENT_PAD;
  const leftLaneMaxX = contentLeft - SIZE - PADDING;
  const rightLaneMinX = contentRight + PADDING;
  return { contentLeft, contentRight, leftLaneMaxX, rightLaneMinX };
};

const MoveableGif = () => {
  const [position, setPosition] = useState({ x: PADDING, y: 120 });
  const posRef = useRef(position);
  const velocity = useRef({ vx: randomVelocity(), vy: randomVelocity() });
  posRef.current = position;

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const { leftLaneMaxX, rightLaneMinX } = getContentBounds(w);
    const maxY = Math.max(0, h - TOTAL_HEIGHT - PADDING);
    const inLeftLane = leftLaneMaxX > PADDING;
    const inRightLane = rightLaneMinX < w - SIZE - PADDING;
    let x: number;
    if (inLeftLane && inRightLane) {
      x = Math.random() < 0.5
        ? PADDING + Math.random() * (leftLaneMaxX - PADDING)
        : rightLaneMinX + Math.random() * (w - SIZE - PADDING - rightLaneMinX);
    } else if (inLeftLane) {
      x = PADDING + Math.random() * (leftLaneMaxX - PADDING);
    } else if (inRightLane) {
      x = rightLaneMinX + Math.random() * (w - SIZE - PADDING - rightLaneMinX);
    } else {
      x = PADDING + Math.random() * Math.max(0, w - SIZE - 2 * PADDING);
    }
    const initial = {
      x,
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
      const { contentLeft, contentRight } = getContentBounds(w);
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
      const overlapsContent = x + SIZE > contentLeft && x < contentRight;
      if (overlapsContent) {
        if (vx > 0) {
          x = contentLeft - SIZE - 2;
          vx = -Math.abs(vx) * (0.8 + Math.random() * JITTER);
        } else {
          x = contentRight + 2;
          vx = Math.abs(vx) * (0.8 + Math.random() * JITTER);
        }
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
      className="pointer-events-none fixed z-0 flex flex-col items-center gap-1 will-change-transform"
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
