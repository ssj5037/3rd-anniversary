"use client";

import { useEffect, useRef } from "react";

const backgroundColor = "#030318";
const maxStarRadius = 1.5;
const minStarOpacity = 0.4;
const maxStarOpacity = 0.7;

function randomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function createStars(width: number, height: number, spacing: number) {
  const stars = [];

  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      const star = {
        x: x + randomInt(spacing),
        y: y + randomInt(spacing),
        r: Math.random() * maxStarRadius,
      };
      stars.push(star);
    }
  }
  return stars;
}

function fillCircle(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  fillStyle: string
) {
  ctx.beginPath();
  ctx.fillStyle = fillStyle;
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

function getOpacity(factor: number) {
  const opacityIncrement =
    (maxStarOpacity - minStarOpacity) * Math.abs(Math.sin(factor));
  const opacity = minStarOpacity + opacityIncrement;
  return opacity;
}

export default function NightSky() {
  const nightSky = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const stars = createStars(width, height, 60);
    let counter = 0;

    if (!nightSky.current) return;

    nightSky.current.width = width;
    nightSky.current.height = height;

    const ctx = nightSky.current.getContext("2d");

    function render() {
      if (!ctx) return;
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);
      stars.forEach(function (star, i) {
        const factor = counter * i;
        const opacity = getOpacity(factor);
        fillCircle(
          ctx,
          star.x,
          star.y,
          star.r,
          `rgba(255, 255, 255, ${opacity}`
        );
      });

      counter++;
      requestAnimationFrame(() => render());
    }

    render();
  }, []);

  return <canvas ref={nightSky} />;
}
