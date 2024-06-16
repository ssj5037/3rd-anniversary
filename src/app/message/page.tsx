import Image from "next/image";
import hjgImage from "../../../public/img/hjg.png";
import ssjImage from "../../../public/img/ssj.png";

export default function messagePage() {
  return (
    <div className='flex justify-center'>
      <div className='bg-white w-[800px] rounded-lg h-[84dvh] relative'>
        <div className='absolute -left-52 bottom-0 w-[500px]'>
          <Image src={hjgImage} width={500} height={500} alt='hjg image' />
        </div>
        <div className='absolute -right-52 bottom-0 w-[500px]'>
          <Image src={ssjImage} width={500} height={500} alt='ssj image' />
        </div>
      </div>
    </div>
  );
}
