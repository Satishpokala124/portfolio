import HeaderCSS from 'src/components/Header.module.css';
import Stars from 'src/components/Stars';

export default function Header() {
  return (
    <div className='relative flex items-center justify-center w-full h-screen -z-10 preserve-3d scroll-align-start'>
      <div
        className={`absolute w-full h-full bg-gradient-to-b from-slate-950 to-sky-900 ${HeaderCSS.bgStars}`}
      >
        <div className='before:absolute before:inset-0 before:m-auto before:bg-cyan-100 before:opacity-70 before:blur-3xl before:rounded-full before:aspect-square absolute w-24 top-[14%] left-[65%] z-10 md:left-[10%] md:top-[15%] lg:w-28 lg:left-[15%] lg:top-[20%]'>
          <img className='transition-all' src='/portfolio/images/moon-2.png' alt='moon' />
        </div>
        <Stars />
      </div>
      <div
        className={`transition-all absolute flex flex-col items-center top-1/3 ${HeaderCSS.title}`}
      >
        <p
          className={`transition-all text-2xl md:text-3xl cursor-default w-full text-white ${HeaderCSS.jump}`}
        >
          {`Hello there!! I'm`}
        </p>
        <div className={`transition-all mt-2 font-bold text-5xl md:text-7xl ${HeaderCSS.jump}`}>
          <h1 className='bg-pan'>Satish Pokala</h1>
        </div>
      </div>
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
