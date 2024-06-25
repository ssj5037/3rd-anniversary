import Image from "next/image";
import hjgImage from "../../../public/img/hjg.png";
import ssjImage from "../../../public/img/ssj.png";

export default function messagePage() {
  return (
    <div className='flex justify-center'>
      <div className='bg-gray-300 message_shadow w-[800px] rounded-lg h-[84dvh] relative'>
        <div className='px-20 pt-20 pb-10 text-black text-xl h-full flex flex-col gap-5 justify-between overflow-auto message_container'>
          <div className='space-y-1.5 break-keep'>
            <p>안녕, 우리가 함께 한 지 벌써 3년이 지났네.</p>
            <p>24년도 벌써 절반이 지났고... 시간이 참 빨리 간다 그치?</p>
            <p>
              우리 그 동안 참 많이 싸우고, 최근에는 헤어질 뻔도 했잖아. 알고
              보니 다 오해긴 했지만만 말이야. ㅎㅎ. 생각해보면 그래도 다툼이
              있었기에 서로를 이해할 수 있었고, 잘 만날 수 있는 발판이 되었던 것
              아닐까? 결론적으로는 점점 우리 사이에 이해와 신뢰가 쌓여 안정적인
              관계로 발전해나가는 것 같아서 넘 좋아. 너도 나와 같은 마음일거라고
              생각해.
            </p>
            <p>
              지내면 지낼수록, 미래를 함께해도 좋을 사람이라는 확신이 점점 드는
              것 같아. 서로에게 배우는 점도 많고, 존중하고, 대화하고... 무엇보다
              너랑 함께 지내면 재밌고 행복해.
            </p>
            <p>
              3년이라는 시간은 우리의 인생에서 매우 짧지만, 서로에 대해 알아갈
              수 있는 긴 시간이었고, 난 이제부터가 우리의 연애의 제대로 된
              시작이 될 것 같다는 느낌이 들어. 난 사실 좋은 것과 싫은 것을 잘
              표현을 하지 못하는데, 최근 들어 너에게는 편하게 말을 하고
              있더라고. 이제야 너를 정말로 편하게 대하는건 아닐까 싶어.
            </p>
            <p>
              여러모로 너를 만난 것은 행운이 아니었을까? 그러니 앞으로도 계속 내
              행운이 되어줘야 해. 함께 지내서 너무 행복했고, 계속 행복하게 잘
              지내보자. 사랑해. 좋은 밤 보내고, 내 꿈 꿔. 🌃
            </p>
          </div>
          <p className='text-right px-10 font-semibold'>
            2024.06.26. 너를 많이 사랑하는 사람으로부터. 💛
          </p>
        </div>
        <div className='absolute -left-72 bottom-0 w-[500px]'>
          <Image src={hjgImage} width={500} height={500} alt='hjg image' />
        </div>
        <div className='absolute -right-72 bottom-0 w-[500px]'>
          <Image src={ssjImage} width={500} height={500} alt='ssj image' />
        </div>
      </div>
    </div>
  );
}
