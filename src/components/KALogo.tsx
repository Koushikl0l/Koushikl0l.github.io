import * as React from "react";

/**
 * Modern pixel-inspired "KA" logo – rounded blocks, balanced spacing, optional container.
 */
const SIZE = 6;
const GAP = 1.5;
const RADIUS = 0.8;
const PAD = 2;

// K: vertical bar + diagonal arms
const K_GRID = [
  [1, 0, 0, 1],
  [1, 0, 1, 0],
  [1, 1, 0, 0],
  [1, 0, 1, 0],
  [1, 0, 0, 1],
];

// A: peak, crossbar, legs
const A_GRID = [
  [0, 1, 0],
  [1, 0, 1],
  [1, 1, 1],
  [1, 0, 1],
  [1, 0, 1],
];

function renderPixelGrid(
  grid: number[][],
  offsetX: number,
  offsetY: number
): React.ReactElement[] {
  const nodes: React.ReactElement[] = [];
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col]) {
        const x = offsetX + col * (SIZE + GAP);
        const y = offsetY + row * (SIZE + GAP);
        nodes.push(
          <rect
            key={`${offsetX}-${row}-${col}`}
            x={x}
            y={y}
            width={SIZE}
            height={SIZE}
            rx={RADIUS}
            ry={RADIUS}
            fill="currentColor"
          />
        );
      }
    }
  }
  return nodes;
}

const K_COLS = 4;
const A_COLS = 3;
const ROWS = 5;
const A_DROP = 4; /* A sits a bit lower than K for an uncluttered look */
const K_WIDTH = K_COLS * (SIZE + GAP) - GAP;
const A_WIDTH = A_COLS * (SIZE + GAP) - GAP;
const LETTER_GAP = SIZE;
const INNER_W = K_WIDTH + LETTER_GAP + A_WIDTH;
const INNER_H = ROWS * (SIZE + GAP) - GAP + A_DROP;
const WIDTH = INNER_W + PAD * 2;
const HEIGHT = INNER_H + PAD * 2;

const KALogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className={className}
      aria-label="KA logo"
    >
      {/* Minimal frame – subtle stroke only */}
      <rect
        x={0.6}
        y={0.6}
        width={WIDTH - 1.2}
        height={HEIGHT - 1.2}
        rx={3.5}
        ry={3.5}
        fill="none"
        stroke="currentColor"
        strokeOpacity={0.2}
        strokeWidth={0.5}
      />
      <g transform={`translate(${PAD}, ${PAD})`}>
        {renderPixelGrid(K_GRID, 0, 0)}
        {renderPixelGrid(A_GRID, K_WIDTH + LETTER_GAP, A_DROP)}
      </g>
    </svg>
  );
};

export default KALogo;
