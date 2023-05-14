import HeaderCSS from 'src/Header.module.css';
import Stars from './Stars';

export default function Header() {
  return (
    <div
      className={`relative flex flex-col items-center justify-center h-screen w-full bg-gradient-to-b from-slate-950 to-sky-950 text-slate-100 ${HeaderCSS.parent}`}
    >
      <div className='w-full h-full'>
        <Stars />
      </div>
      <div className='absolute flex flex-col items-center justify-center'>
        <p className={`text-2xl cursor-default w-full ${HeaderCSS.jump}`}>{`Hello there!! I'm`}</p>
        <h1 className={`mt-2 font-bold text-6xl text-cyan-400 ${HeaderCSS.jump}`}>Satish Pokala</h1>
      </div>
      <img
        className='absolute z-10 object-cover object-bottom w-full h-full'
        src='/portfolio/images/bg-mountains.png'
        alt='bg-mountains'
      />
    </div>
  );
}
