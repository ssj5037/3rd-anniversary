import Image from "next/image";
import localFont from "next/font/local";
import sdImage from "../../public/img/sd.png";

const continuous = localFont({
  src: "../../public/font/continuous.otf",
  display: "swap",
});

export default function Home() {
  return (
    <div className='flex items-center justify-center'>
      <div className='w-[800px]'>
        <Image src={sdImage} width={800} alt='sd image' />
      </div>
      <div className={`${continuous.className} text-5xl pt-60 text-violet-100`}>
        Since. <br />
        2021. 06. 26
      </div>
    </div>
  );
}
