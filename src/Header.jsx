import HeaderCSS from 'src/Header.module.css';
import Stars from './Stars';

export default function Header() {
  return (
    <div
      className={`relative flex flex-col items-center justify-center h-screen w-full bg-gradient-to-b from-slate-950 to-sky-950 text-slate-100 p-0 m-0 ${HeaderCSS.parent}`}
    >
      <div className='w-full h-full'>
        <Stars />
      </div>
      <div className='absolute flex flex-col items-center top-1/3 md:top-1/3'>
        <p className={`text-2xl cursor-default w-full ${HeaderCSS.jump}`}>{`Hello there!! I'm`}</p>
        <h1 className={`mt-2 font-bold text-6xl text-cyan-400 ${HeaderCSS.jump}`}>
          <span className='bg-pan'>Satish Pokala</span>
        </h1>
      </div>
      <img
        className='absolute z-10 object-cover object-bottom w-full h-full mix-blend-luminosity'
        src='images/bg-mountains.png'
        alt='bg-mountains'
      />
    </div>
  );
}
