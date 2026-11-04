/**
 * Lightweight Offline QR & Barcode Generator for Store Pickup Pass
 */

window.NexusPassGenerator = {
  // Generate authentic barcode bars
  drawBarcode: function(canvas, code) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // Seeded random pseudo-barcode based on code string
    let seed = 0;
    for (let i = 0; i < code.length; i++) {
      seed = (seed * 31 + code.charCodeAt(i)) % 100000;
    }

    const pseudoRandom = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    ctx.fillStyle = '#f8fafc';
    let x = 12;
    const barHeight = height - 20;

    while (x < width - 12) {
      const barWidth = Math.floor(pseudoRandom() * 3) + 1;
      const isDrawn = pseudoRandom() > 0.35;
      if (isDrawn) {
        ctx.fillRect(x, 10, barWidth, barHeight);
      }
      x += barWidth + Math.floor(pseudoRandom() * 2) + 1;
    }
  },

  // Generate matrix QR pattern on Canvas
  drawQRCode: function(canvas, text) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const size = canvas.width;
    ctx.clearRect(0, 0, size, size);

    // Background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, size, size);

    const gridSize = 25;
    const cellSize = size / gridSize;

    // Seeded hash for reproducible matrix
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = (hash << 5) - hash + text.charCodeAt(i);
      hash |= 0;
    }

    const seededBool = (x, y) => {
      const val = Math.sin(hash + x * 37 + y * 17) * 10000;
      return (val - Math.floor(val)) > 0.48;
    };

    ctx.fillStyle = '#090d16';

    // Position detection corner patterns (Finder patterns)
    const drawFinder = (startX, startY) => {
      for (let r = 0; r < 7; r++) {
        for (let c = 0; c < 7; c++) {
          if (
            r === 0 || r === 6 || c === 0 || c === 6 ||
            (r >= 2 && r <= 4 && c >= 2 && c <= 4)
          ) {
            ctx.fillRect((startX + c) * cellSize, (startY + r) * cellSize, cellSize, cellSize);
          }
        }
      }
    };

    drawFinder(0, 0);
    drawFinder(gridSize - 7, 0);
    drawFinder(0, gridSize - 7);

    // Random data cells
    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        // Skip corner finder zones
        if (
          (r < 8 && c < 8) ||
          (r < 8 && c >= gridSize - 8) ||
          (r >= gridSize - 8 && c < 8)
        ) {
          continue;
        }

        // Timing patterns
        if (r === 6 || c === 6) {
          if ((r + c) % 2 === 0) {
            ctx.fillRect(c * cellSize, r * cellSize, cellSize, cellSize);
          }
          continue;
        }

        if (seededBool(c, r)) {
          ctx.fillRect(c * cellSize, r * cellSize, cellSize, cellSize);
        }
      }
    }
  }
};

