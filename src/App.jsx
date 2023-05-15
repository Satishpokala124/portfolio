import Header from 'src/Header';

function App() {
  return (
    <div className='w-full h-screen overflow-x-hidden overflow-y-auto preserve-3d'>
      <Header />
      <div className='flex items-center justify-center w-full h-screen text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white bg-[#0e0b07]'>
        <p className='bg-pan'>{`I'm a Fullstack developer`}</p>
      </div>
    </div>
  );
}

export default App;
