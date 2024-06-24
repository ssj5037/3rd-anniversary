"use client";

import { useState } from "react";
import "./galleryStyle.css";
import gallerySample from "../../../public/img/gallerySample.jpg";
import Image from "next/image";

export default function GalleryPage() {
  const [imgList, setImgList] = useState([
    {
      src: gallerySample,
      date: "2023-01-01",
      isChecked: true,
      idx: 3,
    },
    {
      src: gallerySample,
      date: "2023-01-01",
      isChecked: false,
      idx: 4,
    },
    {
      src: gallerySample,
      date: "2023-01-01",
      isChecked: false,
      idx: 5,
    },
    {
      src: gallerySample,
      date: "2023-01-01",
      isChecked: false,
      idx: 0,
    },
    {
      src: gallerySample,
      date: "2023-01-01",
      isChecked: false,
      idx: 0,
    },
    {
      src: gallerySample,
      date: "2023-01-01",
      isChecked: false,
      idx: 0,
    },
    {
      src: gallerySample,
      date: "2023-01-01",
      isChecked: false,
      idx: 0,
    },
    {
      src: gallerySample,
      date: "2023-01-01",
      isChecked: false,
      idx: 0,
    },
    {
      src: gallerySample,
      date: "2023-01-01",
      isChecked: false,
      idx: 1,
    },
    {
      src: gallerySample,
      date: "2023-01-01",
      isChecked: false,
      idx: 2,
    },
  ]);

  const handleClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    console.log(index);
    setImgList((prev) =>
      prev.map((item, itemIndex) => ({
        ...item,
        isChecked: itemIndex === index ? true : false,
        idx: 0,
      }))
    );

    let prevIdx3 = index - 3;
    let prevIdx2 = index - 2;
    let prevIdx1 = index - 1;
    let nextIdx1 = index + 1;
    let nextIdx2 = index + 2;
    let nextIdx3 = index + 3;
    if (index === 0) {
      prevIdx3 = imgList.length - 3;
      prevIdx2 = imgList.length - 2;
      prevIdx1 = imgList.length - 1;
    }
    if (index === 1) {
      prevIdx3 = imgList.length - 2;
      prevIdx2 = imgList.length - 1;
    }
    if (index === 2) {
      prevIdx3 = imgList.length - 1;
    }
    if (index === imgList.length - 3) {
      nextIdx3 = 0;
    }
    if (index === imgList.length - 2) {
      nextIdx2 = 0;
      nextIdx3 = 1;
    }
    if (index === imgList.length - 1) {
      nextIdx1 = 0;
      nextIdx2 = 1;
      nextIdx3 = 2;
    }

    setImgList((prev) => {
      prev[prevIdx3].idx = 1;
      prev[prevIdx2].idx = 2;
      prev[prevIdx1].idx = 3;
      prev[index].idx = 4;
      prev[nextIdx1].idx = 5;
      prev[nextIdx2].idx = 6;
      prev[nextIdx3].idx = 7;
      return prev;
    });
  };
  return (
    <div className='body'>
      <div className='container'>
        <div className='cards'>
          {imgList.map((item, index) => {
            return (
              <div key={index}>
                <input
                  className='card-radio'
                  type='radio'
                  name='slider'
                  id={`item-${index + 1}`}
                  defaultChecked={item.isChecked}
                  onClick={(e) => handleClick(e, index)}
                ></input>
                <label
                  className={`card ${item.isChecked && "center"} idx-${
                    item.idx
                  }`}
                  htmlFor={`item-${index + 1}`}
                  id={`image-${index + 1}`}
                >
                  <Image src={item.src} alt={`image-${index + 1}`} />
                  <p className='bg-white text-black p-4'>
                    {index} - {item.isChecked} - {item.idx} - {item.date}
                  </p>
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
