import HeaderCSS from 'src/Header.module.css';
import Stars from './Stars';

export default function Header() {
  return (
    <div className='relative flex items-center justify-center w-full h-screen -z-10 perspective-10'>
      <div
        className={`absolute w-full h-full bg-gradient-to-b from-slate-950 to-sky-950 ${HeaderCSS.bgStars}`}
      >
        <Stars />
      </div>
      <div className='absolute flex flex-col items-center top-1/3 md:top-1/4'>
        <p className={`text-2xl cursor-default w-full text-white ${HeaderCSS.jump}`}>
          {`Hello there!! I'm`}
        </p>
        <p className={`mt-2 font-bold text-6xl ${HeaderCSS.jump}`}>
          <span className='bg-pan'>Satish Pokala</span>
        </p>
      </div>
      <img
        className={`absolute object-cover w-full h-full ${HeaderCSS.bgMountains}`}
        src='images/bg-mountains-2.png'
        alt='bg-mountains'
      />
    </div>
  );
}
