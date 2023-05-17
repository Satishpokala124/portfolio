import HeaderCSS from 'src/Header.module.css';
import Stars from './Stars';

export default function Header() {
  return (
    <div className='relative flex items-center justify-center w-full h-screen -z-10 preserve-3d'>
      <div
        className={`absolute w-full h-full bg-gradient-to-b from-slate-950 to-sky-900 ${HeaderCSS.bgStars}`}
      >
        <Stars />
      </div>
      <div className='absolute flex flex-col items-center top-1/3'>
        <p className={`text-2xl md:text-3xl cursor-default w-full text-white ${HeaderCSS.jump}`}>
          {`Hello there!! I'm`}
        </p>
        <p className={`mt-2 font-bold text-5xl md:text-7xl ${HeaderCSS.jump}`}>
          <span className='bg-pan'>Satish Pokala</span>
        </p>
      </div>
      {/* <img
        className={`absolute object-cover w-full h-full ${HeaderCSS.bgMountains}`}
        src='/images/bg-mountains-3.png'
        alt='bg-mountains-3'
      /> */}
      <img
        className={`absolute bottom-1 object-cover w-full h-full ${HeaderCSS.bgMountains}`}
        src='/portfolio/images/bg-mountains-2.png'
        alt='bg-mountains-2'
      />
      <img
        className='absolute object-cover w-full h-full object-'
        src='/portfolio/images/fg-area-2.png'
        alt='foreground'
      />
    </div>
  );
}
