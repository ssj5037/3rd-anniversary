"use client";

import { useEffect, useRef } from "react";

const style = ["style1", "style2", "style3", "style4"];
const tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
const opacity = [
  "opacity1",
  "opacity1",
  "opacity1",
  "opacity2",
  "opacity2",
  "opacity3",
];
export default function Constelacao() {
  const constelacao = useRef<HTMLDivElement>(null);
  const getRandomArbitrary = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  useEffect(() => {
    console.log("???");
    if (!constelacao.current) return;
    console.log("!!!");

    let estrela = "";
    const qtdeEstrelas = 250;
    const widthWindow = window.innerWidth;
    const heightWindow = window.innerHeight;

    for (let i = 0; i < qtdeEstrelas; i++) {
      estrela +=
        "<span class='estrela " +
        style[getRandomArbitrary(0, 4)] +
        " " +
        opacity[getRandomArbitrary(0, 6)] +
        " " +
        tam[getRandomArbitrary(0, 5)] +
        "' style='animation-delay: ." +
        getRandomArbitrary(0, 9) +
        "s; left: " +
        getRandomArbitrary(0, widthWindow) +
        "px; top: " +
        getRandomArbitrary(0, heightWindow) +
        "px;'></span>";
    }

    constelacao.current.innerHTML = estrela;
  }, []);
  return <div ref={constelacao} className='constelacao'></div>;
}
