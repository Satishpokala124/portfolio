import HeaderCSS from 'src/components/Header.module.css';
import Stars from 'src/components/Stars';
import { twMerge } from 'tailwind-merge';

export default function Header() {
  return (
    <div className='preserve-3d relative -z-10 flex h-screen w-full items-center justify-center'>
      <div
        className={twMerge(
          'absolute h-full w-full bg-gradient-to-b from-slate-950 to-sky-900',
          HeaderCSS.bgStars
        )}
      >
        <div className='absolute left-[65%] top-[14%] z-10 w-20 before:absolute before:inset-0 before:m-auto before:aspect-square before:rounded-full before:bg-cyan-100 before:opacity-50 before:blur-2xl md:left-[10%] md:top-[15%] lg:left-[15%] lg:top-[20%] lg:w-24'>
          <img className='transition-all' src='/portfolio/images/moon-2.png' alt='moon' />
        </div>
        <Stars />
      </div>
      <div
        className={twMerge(
          'absolute top-1/3 flex flex-col items-center transition-all',
          HeaderCSS.title
        )}
      >
        <p
          className={twMerge(
            'w-full cursor-default text-2xl text-cyan-100 transition-all md:text-3xl',
            HeaderCSS.jump
          )}
        >
          {`Hello there!! I'm`}
        </p>
        <div
          className={twMerge('mt-2 text-5xl font-bold transition-all md:text-7xl', HeaderCSS.jump)}
        >
          <h1 className={`bg-pan ${HeaderCSS.textStroke2}`}>Satish Pokala</h1>
        </div>
      </div>
      <img
        className={twMerge('absolute bottom-1 h-full w-full object-cover', HeaderCSS.bgMountains)}
        src='/portfolio/images/bg-mountains-2.png'
        alt='bg-mountains-2'
      />
      <img
        className='object- absolute h-full w-full object-cover'
        src='/portfolio/images/fg-area-2.png'
        alt='foreground'
      />
    </div>
  );
}
