import Image from "next/image";
import hjgImage from "../../../public/img/hjg.png";
import ssjImage from "../../../public/img/ssj.png";

export default function messagePage() {
  return (
    <div className='flex justify-center'>
      <div className='bg-violet-100 message_shadow w-[800px] rounded-lg h-[84dvh] relative'>
        <div className='p-20 text-black text-xl h-full flex flex-col justify-between'>
          <p>
            안녕, 우리가 함께한지 벌써 3년이 지났네.
            <br />
            장거리 연애를 하며 잘 지낼 수 있을까 걱정했던 것과는 달리 행복한
            연애를 하고 있어서 좋아.
            <br />
            그 동안 많이 싸운 것 같은데, 생각해보면 그래도 다툼이 있었기에
            서로를 이해할 수 있었고, 잘 만날 수 있는 발판이 되었던 것 같아.
            <br />
          </p>
          <p className='text-right px-10 font-semibold text-violet-950'>
            2024.06.23. 너를 많이 사랑하는 사람으로부터.
          </p>
        </div>
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
