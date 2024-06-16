import localFont from "next/font/local";
import dayjs from "dayjs";
import Music from "./Music";
import Nav from "./Nav";

const continuous = localFont({
  src: "../../../public/font/continuous.otf",
  display: "swap",
});

export default function Header() {
  return (
    <header className={`flex justify-between items-center px-20 py-10`}>
      <div className='flex gap-20'>
        <h1 className={`text-6xl ${continuous.className}`}>
          D+{dayjs().diff(dayjs("2021-06-26"), "days")}
        </h1>
        <Nav />
      </div>
      <Music />
    </header>
  );
}
