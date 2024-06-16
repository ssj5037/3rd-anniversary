"use client";

import "./galleryStyle.css";
import gallerySample from "../../../public/img/gallerySample.jpg";
import Image from "next/image";

const imgList = [
  { src: gallerySample, date: "2023-01-01" },
  { src: gallerySample, date: "2023-01-01" },
  { src: gallerySample, date: "2023-01-01" },
];

export default function galleryPage() {
  return (
    <div className='body'>
      <div className='container'>
        {imgList.map((_, index) => {
          return (
            <input
              key={index}
              className='card-radio'
              type='radio'
              name='slider'
              id={`item-${index + 1}`}
              defaultChecked={index === 0}
            />
          );
        })}
        <div className='cards'>
          {imgList.map((item, index) => {
            return (
              <label
                key={index}
                className='card'
                htmlFor={`item-${index + 1}`}
                id={`image-${index + 1}`}
              >
                <Image src={item.src} alt={`image-${index + 1}`} />
                <p className='bg-white text-black p-4'>{item.date}</p>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
