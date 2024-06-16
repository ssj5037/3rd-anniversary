import Image from "next/image";
import sdImage from "../../public/img/sd.png";

export default function Home() {
  return (
    <div className='flex items-center justify-center'>
      <div className='w-[800px]'>
        <Image src={sdImage} width={800} alt='sd image' />
      </div>
      <div>Since. 2021. 06. 26</div>
    </div>
  );
}
