import HeaderCSS from 'src/Header.module.css';

export default function Header() {
  return (
    <div className={`flex flex-col ${HeaderCSS.parent}`}>
      <p className={`text-2xl cursor-default  ${HeaderCSS.jump}`}>{`Hello there!! I'm`}</p>
      <h1 className={`mt-2 font-bold text-6xl text-cyan-400 ${HeaderCSS.jump}`}>Satish Pokala</h1>
    </div>
  );
}
