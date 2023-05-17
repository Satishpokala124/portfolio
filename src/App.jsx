import Header from 'src/components/Header';

function App() {
  return (
    <div className='w-full h-screen overflow-x-hidden overflow-y-auto perspective-100 scroll-type-proximity'>
      <Header />
      <div className='flex items-center justify-center w-full h-screen text-4xl font-extrabold text-white bg-black sm:text-5xl md:text-6xl lg:text-7xl scroll-align-start'>
        <p className='transition-all bg-pan'>{`I'm a Fullstack developer`}</p>
      </div>
    </div>
  );
}

export default App;
