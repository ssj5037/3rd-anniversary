"use client";

import { useState } from "react";
import "./galleryStyle.css";
import img20210903 from "../../../public/img/gallery/20210903.jpg";
import img20210904 from "../../../public/img/gallery/20210904.jpg";
import img202110021 from "../../../public/img/gallery/20211002-1.jpg";
import img202110022 from "../../../public/img/gallery/20211002-2.jpg";
import img202110023 from "../../../public/img/gallery/20211002-3.jpg";
import img202111141 from "../../../public/img/gallery/20211114-1.jpg";
import img202111142 from "../../../public/img/gallery/20211114-2.jpg";
import img202112191 from "../../../public/img/gallery/20211219-1.jpg";
import img202112192 from "../../../public/img/gallery/20211219-2.jpg";
import img20220111 from "../../../public/img/gallery/20220111.jpg";
import img20220306 from "../../../public/img/gallery/20220306.jpg";
import img20220403 from "../../../public/img/gallery/20220403.jpg";
import img20220416 from "../../../public/img/gallery/20220416.jpg";
import img202204171 from "../../../public/img/gallery/20220417-1.jpg";
import img202204172 from "../../../public/img/gallery/20220417-2.jpg";
import img20220505 from "../../../public/img/gallery/20220505.jpg";
import img202205081 from "../../../public/img/gallery/20220508-1.jpg";
import img202205082 from "../../../public/img/gallery/20220508-2.jpg";
import img20220622 from "../../../public/img/gallery/20220622.jpg";
import img20220827 from "../../../public/img/gallery/20220827.jpg";
import img202211121 from "../../../public/img/gallery/20221112-1.jpg";
import img202211122 from "../../../public/img/gallery/20221112-2.jpg";
import img20221218 from "../../../public/img/gallery/20221218.jpg";
import img20230129 from "../../../public/img/gallery/20230129.jpg";
import img20230218 from "../../../public/img/gallery/20230218.jpg";
import img20230219 from "../../../public/img/gallery/20230219.jpg";
import img202304011 from "../../../public/img/gallery/20230401-1.jpg";
import img202304012 from "../../../public/img/gallery/20230401-2.jpg";
import img202305051 from "../../../public/img/gallery/20230505-1.jpg";
import img202305052 from "../../../public/img/gallery/20230505-2.jpg";
import img20230506 from "../../../public/img/gallery/20230506.jpg";
import img20230507 from "../../../public/img/gallery/20230507.jpg";
import img202305281 from "../../../public/img/gallery/20230528-1.jpg";
import img202305282 from "../../../public/img/gallery/20230528-2.jpg";
import img20230624 from "../../../public/img/gallery/20230624.jpg";
import img202310141 from "../../../public/img/gallery/20231014-1.jpg";
import img202310142 from "../../../public/img/gallery/20231014-2.jpg";
import img20231116 from "../../../public/img/gallery/20231116.jpg";
import img202312131 from "../../../public/img/gallery/20231213-1.jpg";
import img202312132 from "../../../public/img/gallery/20231213-2.jpg";
import img20240219 from "../../../public/img/gallery/20240219.jpg";
import img202403311 from "../../../public/img/gallery/20240331-1.jpg";
import img202403312 from "../../../public/img/gallery/20240331-2.jpg";
import img20240601 from "../../../public/img/gallery/20240601.jpg";
import img20240602 from "../../../public/img/gallery/20240602.jpg";
import img202406231 from "../../../public/img/gallery/20240623-1.jpg";
import img202406232 from "../../../public/img/gallery/20240623-2.jpg";
import Image from "next/image";
import { RiHeart3Fill } from "react-icons/ri";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { PiBookmarkSimple, PiPaperPlaneTilt } from "react-icons/pi";

export default function GalleryPage() {
  const [imgList, setImgList] = useState([
    {
      src: img20210903,
      date: "2021-09-03",
      content: "광안리 데이트 💛",
      isChecked: true,
      idx: 5,
    },
    {
      src: img20210904,
      date: "2021-09-04",
      content: "고앵이 그만 괴롭혀 ㅋㅋ 결국 잔뜩 긁히고 반창고행~",
      isChecked: false,
      idx: 6,
    },
    {
      src: img202110021,
      date: "2021-10-02",
      content: "첫 커플 템! 신발 이뿌다 ^.^",
      isChecked: false,
      idx: 7,
    },
    {
      src: img202110022,
      date: "2021-10-02",
      content: "100일 축하해.",
      isChecked: false,
      idx: 8,
    },
    {
      src: img202110023,
      date: "2021-10-02",
      content: "그리고 우리의 첫 커플링",
      isChecked: false,
      idx: 9,
    },
    {
      src: img202111141,
      date: "2021-11-14",
      content: "서울 N 타워! 낙엽이 잔뜩 떨어져서 분위기가 멋졌다~",
      isChecked: false,
      idx: 0,
    },
    {
      src: img202111142,
      date: "2021-11-14",
      content: "역시 코트 핏 잘 받는구만 😄",
      isChecked: false,
      idx: 0,
    },
    {
      src: img202112191,
      date: "2021-12-19",
      content: "ㅋㅋㅋ 주사위 잘 좀 굴려봐!",
      isChecked: false,
      idx: 0,
    },
    {
      src: img202112192,
      date: "2021-12-19",
      content: "초집중. 결국 실패했지만 ㅠ 아숩다아",
      isChecked: false,
      idx: 0,
    },
    {
      src: img20220111,
      date: "2022-01-11",
      content: "영하 15도 날씨... 너무 춥지만 그래도 즐거움 ❄️ 히히",
      isChecked: false,
      idx: 0,
    },
    {
      src: img20220306,
      date: "2022-03-06",
      content: "마리모 로곤이 구경중...👀 ",
      isChecked: false,
      idx: 0,
    },
    {
      src: img20220403,
      date: "2022-04-03",
      content: "첫 꽃 나들이 🌸 사람 엄청 많아, 잔뜩 치이고 왔다",
      isChecked: false,
      idx: 0,
    },
    {
      src: img20220416,
      date: "2022-04-16",
      content: "서울 숲 나들이 🌳",
      isChecked: false,
      idx: 0,
    },
    {
      src: img202204171,
      date: "2022-04-17",
      content: "한 방울에도 그램이 훅훅 늘어서 엄청 긴장하며 넣었다 💦",
      isChecked: false,
      idx: 0,
    },
    {
      src: img202204172,
      date: "2022-04-17",
      content: "며칠 지나긴 했지만 생일 축하해 🎂",
      isChecked: false,
      idx: 0,
    },
    {
      src: img20220505,
      date: "2022-05-05",
      content: "한강 소풍 가기 좋은 날씨 🍱",
      isChecked: false,
      idx: 0,
    },
    {
      src: img202205081,
      date: "2022-05-08",
      content: "후후 😗",
      isChecked: false,
      idx: 0,
    },
    {
      src: img202205082,
      date: "2022-05-08",
      content: "즐거웠다~ 비만 안왔다면 완벽했는데!",
      isChecked: false,
      idx: 0,
    },
    {
      src: img20220622,
      date: "2022-06-22",
      content: "💛 1주년 💛 함께해줘서 고마워, 꽃다발도 고마워 🌻",
      isChecked: false,
      idx: 0,
    },
    {
      src: img20220827,
      date: "2022-08-27",
      content: "높은 곳에서 본 풍경들이 기억에 많이 남는 곳이야",
      isChecked: false,
      idx: 0,
    },
    {
      src: img202211121,
      date: "2022-11-12",
      content: "기요미 😗",
      isChecked: false,
      idx: 0,
    },
    {
      src: img202211122,
      date: "2022-11-12",
      content: "오늘은 와기가 타코야끼 요리사 🧑‍🍳",
      isChecked: false,
      idx: 0,
    },
    {
      src: img20221218,
      date: "2022-12-18",
      content: "너무 귀여운거 아니야? 배경화면 당첨",
      isChecked: false,
      idx: 0,
    },
    {
      src: img20230129,
      date: "2023-01-29",
      content: "실탄사격 너무 재밌다! 총구에서 불꽃 튀는거 너무 신기해",
      isChecked: false,
      idx: 0,
    },
    {
      src: img20230218,
      date: "2023-02-18",
      content: "경건하게 사진을 찍는 와기",
      isChecked: false,
      idx: 0,
    },
    {
      src: img20230219,
      date: "2023-02-19",
      content: "우리가 좋아하는 레몬 케이크 🍋",
      isChecked: false,
      idx: 0,
    },
    {
      src: img202304011,
      date: "2023-04-01",
      content: "동화 속의 한 장면 같았던 진해가는 길...",
      isChecked: false,
      idx: 0,
    },
    {
      src: img202304012,
      date: "2023-04-01",
      content: "막 찍어도 분위기 있다",
      isChecked: false,
      idx: 0,
    },
    {
      src: img202305051,
      date: "2023-05-05",
      content: "백사장에 흔적 남기기 😝",
      isChecked: false,
      idx: 0,
    },
    {
      src: img202305052,
      date: "2023-05-05",
      content: "ㅋㅋㅋㅋㅋㅋㅋ",
      isChecked: false,
      idx: 0,
    },
    {
      src: img20230506,
      date: "2023-05-06",
      content: "브이에 가두기 ㅋㅋㅋㅋㅋㅋㅋ",
      isChecked: false,
      idx: 0,
    },
    {
      src: img20230507,
      date: "2023-05-07",
      content: "새침-",
      isChecked: false,
      idx: 0,
    },
    {
      src: img202305281,
      date: "2023-05-28",
      content: "사진 잘 받는걸?",
      isChecked: false,
      idx: 0,
    },
    {
      src: img202305282,
      date: "2023-05-28",
      content: "데칼코마니",
      isChecked: false,
      idx: 0,
    },
    {
      src: img20230624,
      date: "2023-06-24",
      content: "💛 2주년 💛 선물 고마워, 사랑해 🌵",
      isChecked: false,
      idx: 0,
    },
    {
      src: img202310141,
      date: "2023-10-14",
      content: "츄르로 유혹 중, 하지만 무릎냥이는 저의 차지죠?",
      isChecked: false,
      idx: 0,
    },
    {
      src: img202310142,
      date: "2023-10-14",
      content: "냥이 쓰다듬 🐈‍⬛ 엄청 얌전하구 귀엽다",
      isChecked: false,
      idx: 0,
    },
    {
      src: img20231116,
      date: "2023-11-16",
      content: "지스타는 동생과 함께",
      isChecked: false,
      idx: 0,
    },
    {
      src: img202312131,
      date: "2023-12-13",
      content: "🩵",
      isChecked: false,
      idx: 0,
    },
    {
      src: img202312132,
      date: "2023-12-13",
      content: "우아 라면에 kfc 치킨 조합 완벽하다",
      isChecked: false,
      idx: 0,
    },
    {
      src: img20240219,
      date: "2024-02-19",
      content: "다음 번엔 구경말고 정말 가구 사러 오자 😄",
      isChecked: false,
      idx: 0,
    },
    {
      src: img202403311,
      date: "2024-03-31",
      content: "온천천 벚꽃길 🌸 사진 실력이 점점 늘고 있어",
      isChecked: false,
      idx: 0,
    },
    {
      src: img202403312,
      date: "2024-03-31",
      content: "날씨 좋다아",
      isChecked: false,
      idx: 0,
    },
    {
      src: img20240601,
      date: "2024-06-01",
      content: "녹차빙수 흡입 ㅋㅋㅋ 배불러",
      isChecked: false,
      idx: 1,
    },
    {
      src: img20240602,
      date: "2024-06-02",
      content: "부산역 뒤편에 이런 좋은 공간이 있었다니,",
      isChecked: false,
      idx: 2,
    },
    {
      src: img202406231,
      date: "2024-06-23",
      content: "항상 사랑해 🥰",
      isChecked: false,
      idx: 3,
    },
    {
      src: img202406232,
      date: "2024-06-23",
      content: "💛",
      isChecked: false,
      idx: 4,
    },
  ]);

  const handleClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setImgList((prev) =>
      prev.map((item, itemIndex) => ({
        ...item,
        isChecked: itemIndex === index ? true : false,
        idx: 0,
      }))
    );

    let prevIdx4 = index - 4;
    let prevIdx3 = index - 3;
    let prevIdx2 = index - 2;
    let prevIdx1 = index - 1;
    let nextIdx1 = index + 1;
    let nextIdx2 = index + 2;
    let nextIdx3 = index + 3;
    let nextIdx4 = index + 4;
    if (index === 0) {
      prevIdx4 = imgList.length - 4;
      prevIdx3 = imgList.length - 3;
      prevIdx2 = imgList.length - 2;
      prevIdx1 = imgList.length - 1;
    }
    if (index === 1) {
      prevIdx4 = imgList.length - 3;
      prevIdx3 = imgList.length - 2;
      prevIdx2 = imgList.length - 1;
    }
    if (index === 2) {
      prevIdx4 = imgList.length - 2;
      prevIdx3 = imgList.length - 1;
    }
    if (index === 3) {
      prevIdx4 = imgList.length - 1;
    }
    if (index === imgList.length - 4) {
      nextIdx4 = 0;
    }
    if (index === imgList.length - 3) {
      nextIdx3 = 0;
      nextIdx4 = 1;
    }
    if (index === imgList.length - 2) {
      nextIdx2 = 0;
      nextIdx3 = 1;
      nextIdx4 = 2;
    }
    if (index === imgList.length - 1) {
      nextIdx1 = 0;
      nextIdx2 = 1;
      nextIdx3 = 2;
      nextIdx4 = 3;
    }

    setImgList((prev) => {
      prev[prevIdx4].idx = 1;
      prev[prevIdx3].idx = 2;
      prev[prevIdx2].idx = 3;
      prev[prevIdx1].idx = 4;
      prev[index].idx = 5;
      prev[nextIdx1].idx = 6;
      prev[nextIdx2].idx = 7;
      prev[nextIdx3].idx = 8;
      prev[nextIdx4].idx = 9;
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
                  <Image
                    src={item.src}
                    alt={`image-${index + 1}`}
                    className='transition-all'
                  />
                  <div className='bg-white py-4 px-6 text-black space-y-4'>
                    <div className='h-6 flex justify-between'>
                      <div className='flex gap-1'>
                        <RiHeart3Fill color='red' size={32} />
                        <HiOutlineChatBubbleOvalLeftEllipsis
                          color='black'
                          size={32}
                        />
                        <PiPaperPlaneTilt color='black' size={32} />
                      </div>
                      <PiBookmarkSimple color='black' size={32} />
                    </div>
                    <p className='text-xl'>{item.date}</p>
                    <p className=''>
                      <span className='font-bold'>@ssj_hjk</span> {item.content}
                    </p>
                  </div>
                </label>
              </div>
            );
          })}
        </div>
        <div className='mt-10 opacity-70'>
          {imgList.findIndex((item) => item.isChecked) + 1} / {imgList.length}
        </div>
      </div>
    </div>
  );
}
