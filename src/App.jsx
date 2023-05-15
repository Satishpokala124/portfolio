import Header from 'src/Header';

function App() {
  return (
    <div className='flex flex-col items-center justify-center w-full overflow-y-auto'>
      <Header />
      <div className='flex items-center justify-center w-full h-screen text-6xl font-extrabold text-white bg-[#001522]'>
        <p className='bg-pan'>{`I'm a Fullstack developer`}</p>
      </div>
    </div>
  );
}

export default App;
