import { useState } from 'react';
import Header from 'src/components/Header';
import ScrollPrompt from './components/ScrollPrompt';

function App() {
  const [id, setId] = useState(null);
  const [showScrollPrompt, setShowScrollPrompt] = useState(true);

  const scrollEvent = (e) => {
    if (id) {
      clearTimeout(id);
      setShowScrollPrompt(false);
    }
    const timeOutId = setTimeout(() => {
      setShowScrollPrompt(true);
    }, 10000);
    setId(timeOutId);
    console.log(id);
  };

  return (
    <div>
      <div
        className={`fixed bottom-4 z-50 flex w-full items-center justify-center transition-opacity duration-500 ${
          showScrollPrompt ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ScrollPrompt />
      </div>
      <div
        className='perspective-100 h-screen w-full overflow-y-auto overflow-x-hidden'
        onScroll={scrollEvent}
      >
        <Header />
        <div className='flex h-screen w-full items-center justify-center bg-black text-4xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl'>
          <p className='bg-pan cursor-default transition-all'>{`I'm a Fullstack developer`}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
