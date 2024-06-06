import Link from "next/link";
import Music from "./Music";

export default function Header() {
  return (
    <header className='flex gap-10'>
      <h1>타이포</h1>
      <nav className='flex gap-4'>
        <Link href='/'>메인페이지</Link>
        <Link href='/gallery'>갤러리</Link>
        <Link href='/message'>메시지</Link>
      </nav>
      <Music />
    </header>
  );
}
